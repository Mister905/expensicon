import React, { Component } from "react";
import ExpenseList from "../expense_list/ExpenseList";
import ExpenseFilters from "../expense_filters/ExpenseFilters";

class ExpenseDashboard extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col m6">
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
