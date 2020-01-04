import { firebase, google_auth_provider } from '../firebase/firebase';

export const login = () => async dispatch => {
    const res = await firebase.auth().signInWithPopup(google_auth_provider);
}