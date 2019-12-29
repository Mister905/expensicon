import { GET_EXPENSES, CREATE_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE } from "./types";
import uuid from "uuid";

export const get_expenses = (expenses, filters) => {
  const { text, sort_by, start_date, end_date } = filters;
  /* We first check if the start_date/end_date is not a number because if it's not then the dates haven't been set yet so we can show all of the expenses.
    If start_date/end_date have been set then we check to see if the expense's created_at time is greater than the start_date and less than the end_date. If it is then we show it, if not then we hide it. */
  if (expenses.length > 0) {
    const filtered_expenses = expenses
      .filter(expense => {
        const start_date_match =
          typeof start_date !== "number" || expense.created_at >= start_date;
        const end_date_match =
          typeof end_date !== "number" || expense.created_at <= end_date;
        const text_match = expense.description
          .toLowerCase()
          .includes(text.toLowerCase());
        return start_date_match && end_date_match && text_match;
      })
      .sort((a, b) => {
        if (sort_by === "date") {
          return a.created_at < b.created_at ? 1 : -1;
        } else if (sort_by === "amount") {
          return a.amount < b.amount ? 1 : -1;
        }
      });

      return {
        type: GET_EXPENSES,
        payload: filtered_expenses
      }
  } else {
    return {
      type: GET_EXPENSES,
      payload: []
    }
  }
};

export const create_expense = form_values => ({
  type: CREATE_EXPENSE,
  payload: {
    id: uuid(),
    form_values
  }
});

export const update_expense = (expense_id, form_values) => ({
  type: UPDATE_EXPENSE,
  payload: { expense_id, form_values }
});

export const delete_expense = expense_id => ({
  type: DELETE_EXPENSE,
  payload: expense_id
});
