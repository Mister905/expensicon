import {
  GET_EXPENSES,
  CREATE_EXPENSE,
  UPDATE_EXPENSE,
  DELETE_EXPENSE,
  GET_EXPENSE
} from "./types";
import uuid from "uuid";
import moment from "moment";
import database from "../firebase/firebase";
import currency from 'currency.js';

export const get_expenses = filters => async dispatch => {
  const { search_text, sort_by, start_date, end_date } = filters;

  const response = await database
    .ref("expenses")
    .once("value")
    .then(snapshot => {
      const expenses = [];

      snapshot.forEach(child_snapshot => {
        expenses.push({
          id: child_snapshot.key,
          ...child_snapshot.val()
        });
      });

      /* check if the start_date/end_date is not a number. if it's not then 
    the dates haven't been set yet so we can show all of the expenses.
    If start_date/end_date have been set then we check to see if the expense's 
    created_at time is greater than the start_date and less than the end_date. 
    If it is then we show it, if not then we hide it. 
    
    timestamps (milliseconds)
    January 1 1970 (unix epoch)
    negative numbers milliseconds before epoch / positive numbers milliseconds after epoch   
  */

      const filtered_expenses = expenses
        .filter(expense => {

          console.log(currency(expense.amount))

          const created_at_moment = moment(expense.created_at);
          const start_date_match = start_date
            ? start_date.isSameOrBefore(created_at_moment, "day")
            : true;
          const end_date_match = end_date
            ? end_date.isSameOrAfter(created_at_moment, "day")
            : true;
          const text_match = expense.description
            .toLowerCase()
            .includes(search_text.toLowerCase());
          return start_date_match && end_date_match && text_match;
        })
        .sort((a, b) => {
          // console.log(a.amount)
          // console.log(b.amount)
          // if (sort_by === "date") {
          //   return a.created_at < b.created_at ? 1 : -1;
          // } else if (sort_by === "amount") {
          //   return a.amount < b.amount ? 1 : -1;
          // }
        });

      // dispatch({
      //   type: GET_EXPENSES,
      //   payload: filtered_expenses
      // });
    });
};

export const get_expense = expense_id => ({
  type: GET_EXPENSE,
  payload: expense_id
});

export const create_expense = (form_values, history) => async dispatch => {
  const { description, amount, note, created_at } = form_values;

  const new_id = uuid();

  const created_at_timestamp = created_at.valueOf();

  const new_expense = {
    id: new_id,
    description,
    amount: amount,
    note,
    created_at: created_at_timestamp
  };

  
  const res = await database.ref("expenses").push(new_expense);

  dispatch({
    type: CREATE_EXPENSE,
    payload: new_expense
  });
  history.push("/");
};

export const update_expense = (
  expense_id,
  form_values,
  history
) => async dispatch => {
  dispatch({
    type: UPDATE_EXPENSE,
    payload: { id: expense_id, ...form_values }
  });
  history.push(`/expenses/${expense_id}`);
};

export const delete_expense = (expense_id, history) => async dispatch => {
  dispatch({ type: DELETE_EXPENSE, payload: expense_id });
  history.push("/");
};
