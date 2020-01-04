import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "materialize-css/dist/css/materialize.min.css";
import "./assets/scss/index.scss";
import { firebase } from "./firebase/firebase";

import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

try {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log("logged in");
    } else {
      console.log("logged out");
    }
  });
} catch (error) {
  console.log(error);
}
