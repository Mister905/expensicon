import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

// COMPONENTS
import Header from "./components/layout/header/Header";
import NotFound from "./components/layout/not_found/NotFound";
import ExpenseCreate from "./components/expenses/expense_create/ExpenseCreate";
import ExpenseEdit from "./components/expenses/expense_edit/ExpenseEdit";
import ExpenseDashboard from "./components/expenses/expense_dashboard/ExpenseDashboard";
import ExpenseView from "./components/expenses/expense_view/ExpenseView";
import Landing from "./components/layout/landing/Landing";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

class App extends Component {
  render() {
    return (
      <div>
        {/* Exclude header from landing */}
        {this.props.location.pathname !== "/" && <Header />}
        <Switch>
          <PublicRoute path="/" component={Landing} exact />
          <PrivateRoute path="/expenses" component={ExpenseDashboard} exact />
          <PrivateRoute path="/expenses/create" component={ExpenseCreate} exact />
          <PrivateRoute path="/expenses/:id" component={ExpenseView} exact />
          <PrivateRoute path="/expenses/edit/:id" component={ExpenseEdit} exact />
          <PrivateRoute component={NotFound} exact />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
