import {
  SET_TEXT_FILTER,
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
  SET_START_DATE,
  SET_END_DATE,
  CLEAR_DATE_FILTER
} from "./types";

export const set_text_filter = (search_text = "") => ({
  type: SET_TEXT_FILTER,
  payload: search_text
});

export const sort_by_amount = () => ({
  type: SORT_BY_AMOUNT
});

export const sort_by_date = () => ({
  type: SORT_BY_DATE
});

export const set_start_date = date => ({
  type: SET_START_DATE,
  payload: date
});

export const set_end_date = date => ({
  type: SET_END_DATE,
  payload: date
});

export const clear_date_filter = () => ({
  type: CLEAR_DATE_FILTER
});