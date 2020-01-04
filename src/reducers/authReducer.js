import { LOGIN, LOGOUT } from "../actions/types";

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        uid: payload
      };
    case LOGOUT:
      return {};
      break;
    default:
      return { ...state };
  }
};
