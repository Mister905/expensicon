import {
  SET_TEXT_FILTER,
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
  SET_START_DATE,
  SET_END_DATE
} from "../actions/types";

const INITIAL_STATE = {
  text: "",
  sort_by: "amount",
  start_date: undefined,
  end_date: undefined
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: payload
      };
    case SORT_BY_AMOUNT:
      return {
        ...state,
        sort_by: "amount"
      };
    case SORT_BY_DATE:
      return {
        ...state,
        sort_by: "date"
      };
    case SET_START_DATE:
      return {
        ...state,
        start_date: payload
      };
    case SET_END_DATE:
      return {
        ...state,
        end_date: payload
      };
    default:
      return state;
  }
};
