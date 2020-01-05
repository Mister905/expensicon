import React, { Component } from "react";
import ExpenseList from "../expense_list/ExpenseList";
import ExpenseFilters from "../../filters/expense_filters/ExpenseFilters";

class ExpenseDashboard extends Component {
  render() {
    return (
      <div className="mt-50">
        <div className="row">
          <div className="col m3 offset-m1">
            <ExpenseFilters />
          </div>
          <div className="col m6">
            <ExpenseList />
          </div>
        </div>
      </div>
    );
  }
}

export default ExpenseDashboard;
