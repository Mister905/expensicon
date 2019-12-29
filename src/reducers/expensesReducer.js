import {
  CREATE_EXPENSE,
  UPDATE_EXPENSE,
  DELETE_EXPENSE,
  GET_EXPENSES
} from "../actions/types";

const INITIAL_STATE = {
  expenses: []
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {

    case GET_EXPENSES:
      return {
        ...state,
        expenses: payload
      }
    case CREATE_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, payload]
      };
    case UPDATE_EXPENSE:
      return state.expenses.map((expense) => {
        if (expense.id === payload.expense_id) {
          return {
            ...expense,
            ...payload
          }
        } else {
          return expense;
        }
      });
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(expense => {
          return expense.id !== payload;
        })
      };
    default:
      return state;
  }
};
