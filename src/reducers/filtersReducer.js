import {
  SET_TEXT_FILTER,
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
  SET_START_DATE,
  SET_END_DATE,
  CLEAR_DATE_FILTER
} from "../actions/types";
import moment from "moment";

const INITIAL_STATE = {
  search_text: "",
  sort_by: "date",
  start_date: moment().startOf("month"),
  end_date: moment().endOf("month")
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        search_text: payload
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
    case CLEAR_DATE_FILTER:
      return {
        ...state,
        start_date: null,
        end_date: null
      };
    default:
      return state;
  }
};
