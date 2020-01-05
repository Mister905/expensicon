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
import { createBrowserHistory } from 'history';
import { login, logout } from './actions/auth';

// This configuration allows you to access history outside of Router
export const history = createBrowserHistory();

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