import { firebase, google_auth_provider } from "../firebase/firebase";
import { LOGIN, LOGOUT } from "../actions/types";

export const login = google_user_id => async dispatch => {
  const res = await firebase.auth().signInWithPopup(google_auth_provider);
  dispatch({
    type: LOGIN,
    payload: google_user_id
  });
};

export const logout = () => async dispatch => {
  const res = await firebase.auth().signOut();
  dispatch({
    type: LOGOUT
  });
};
