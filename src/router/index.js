import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// COMPONENTS
import Header from '../components/layout/header/Header';
import Help from '../components/layout/help/Help';
import NotFound from '../components/layout/not_found/NotFound';
import ExpenseDashboard from '../components/expenses/expense_dashboard/ExpenseDashboard';
import ExpenseCreate from '../components/expenses/expense_create/ExpenseCreate';
import ExpenseEdit from '../components/expenses/expense_edit/ExpenseEdit';

const Router = () => (
  <BrowserRouter>
    <Header />
    <div className="container">
      <Switch>
        <Route component={Help} exact />
        <Route component={ExpenseDashboard} exact />
        <Route component={ExpenseCreate} exact />
        <Route component={ExpenseEdit} exact />
        <Route component={NotFound} exact />
      </Switch>
    </div>
  </BrowserRouter>
);
 
export default Router;