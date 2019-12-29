import React, { Component } from 'react';
import ExpenseList from '../expense_list/ExpenseList';
import ExpenseFilters from '../expense_filters/ExpenseFilters';

class ExpenseDashboard extends Component {
    render() {
        return (
            <div>
                <ExpenseFilters />
                <ExpenseList />
            </div>
        )
    }
}

export default ExpenseDashboard;