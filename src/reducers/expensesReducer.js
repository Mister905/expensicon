import {
  CREATE_EXPENSE,
  UPDATE_EXPENSE,
  DELETE_EXPENSE,
  GET_EXPENSES,
  GET_EXPENSE
} from "../actions/types";

const INITIAL_STATE = {
  expenses: [
    {
      id: "gfsadf7892342fswa",
      description: "January Rent",
      note: "afsadlkjk;lsaflk",
      amount: "$69",
      created_at: Date.now()
    },
    {
      id: "fdsasdfsadfgdfsgreqr",
      description: "March Rent",
      note: "kjlkhjkhaflk",
      amount: "$88",
      created_at: Date.now()
    }
  ],
  loading_expenses: true,
  current_expense: {},
  loading_current_expense: true
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_EXPENSES:
      return {
        ...state,
        expenses: payload,
        loading_expenses: false
      };
    case CREATE_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, payload]
      };
    case UPDATE_EXPENSE:
      const updated_expenses = state.expenses.map(expense => {
        if (expense.id === payload.id) {
          return {
            ...expense,
            ...payload
          };
        } else {
          return expense;
        }
      });
      return {
        ...state,
        expenses: updated_expenses
      };

    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(expense => {
          return expense.id !== payload;
        })
      };
    case GET_EXPENSE:
      return {
        ...state,
        current_expense: state.expenses.find(expense => {
          if (expense.id === payload) {
            return expense;
          }
        }),
        loading_current_expense: false
      };
    default:
      return state;
  }
};
