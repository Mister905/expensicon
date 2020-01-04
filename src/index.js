import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { Router } from "react-router-dom";
import App from "./App";
import "materialize-css/dist/css/materialize.min.css";
import "./assets/scss/index.scss";
import reducers from "./reducers";
import { firebase } from "./firebase/firebase";
import createHistory from 'history/createBrowserHistory';
import { login, logout } from './actions/auth';

// This configuration allows you to access history outside of Router
export const history = createHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

try {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      store.dispatch(login(user.uid));
      history.push('/expenses');
    } else {
      store.dispatch(logout());
      history.push('/');
    }
  });
} catch (error) {
  console.log(error);
}