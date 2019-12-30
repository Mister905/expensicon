import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// COMPONENTS
import Header from "../components/layout/header/Header";
import Help from "../components/layout/help/Help";
import NotFound from "../components/layout/not_found/NotFound";
import ExpenseCreate from "../components/expenses/expense_create/ExpenseCreate";
import ExpenseEdit from "../components/expenses/expense_edit/ExpenseEdit";
import ExpenseDashboard from "../components/expenses/expense_dashboard/ExpenseDashboard";
import ExpenseView from "../components/expenses/expense_view/ExpenseView";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={ExpenseDashboard} exact />
      <Route path="/expenses" component={ExpenseDashboard} exact />
      <Route path="/expenses/create" component={ExpenseCreate} exact />
      <Route path="/expenses/:id" component={ExpenseView} exact />
      <Route path="/expenses/edit/:id" component={ExpenseEdit} exact />
      <Route path="/help" component={Help} exact />
      <Route component={NotFound} exact />
    </Switch>
  </BrowserRouter>
);

export default Router;
