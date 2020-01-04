import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

// COMPONENTS
import Header from "./components/layout/header/Header";
import Help from "./components/layout/help/Help";
import NotFound from "./components/layout/not_found/NotFound";
import ExpenseCreate from "./components/expenses/expense_create/ExpenseCreate";
import ExpenseEdit from "./components/expenses/expense_edit/ExpenseEdit";
import ExpenseDashboard from "./components/expenses/expense_dashboard/ExpenseDashboard";
import ExpenseView from "./components/expenses/expense_view/ExpenseView";
import Landing from "./components/layout/landing/Landing";

class App extends Component {
  render() {
    return (
      <div>
        {/* Exclude header from landing */}
        {this.props.location.pathname !== "/" && <Header />}
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/expenses" component={ExpenseDashboard} exact />
          <Route path="/expenses/create" component={ExpenseCreate} exact />
          <Route path="/expenses/:id" component={ExpenseView} exact />
          <Route path="/expenses/edit/:id" component={ExpenseEdit} exact />
          <Route path="/help" component={Help} exact />
          <Route component={NotFound} exact />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
