import React, { Component } from "react";
import { connect } from "react-redux";
import { get_expenses } from "../../../actions/expenses";
import Preloader from "../../layout/preloader/Preloader";
import { Link } from "react-router-dom";

class ExpenseList extends Component {
  componentDidMount = () => {
    const { expenses } = this.props.expenses;
    const { filters } = this.props;
    this.props.get_expenses(expenses, filters);
  };

  render_expense_list = () => {
    const { loading_expenses } = this.props.expenses;
    const { expenses } = this.props.expenses;
    if (loading_expenses) {
      return (
        <div className="row">
          <div className="col m12">
            <Preloader />
          </div>
        </div>
      );
    } else {
      return expenses.map(expense => {
        return (
          <div key={expense.id} className="row">
            <div className="col m12 card">
              <Link to={`/expenses/${expense.id}`}>
                <span className="card-title">{expense.description}</span>
              </Link>
              <p>{expense.amount}</p>
              <p>{expense.note}</p>
              <p>{expense.created_at}</p>
            </div>
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col m12">
            <h1>Expense List</h1>
          </div>
        </div>
        {this.render_expense_list()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps, { get_expenses })(ExpenseList);
