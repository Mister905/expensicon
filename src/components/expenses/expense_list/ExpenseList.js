import React, { Component } from "react";
import { connect } from "react-redux";
import { get_expenses } from "../../../actions/expenses";
import Preloader from "../../layout/preloader/Preloader";
import { Link } from "react-router-dom";
import moment from "moment";

class ExpenseList extends Component {
  componentDidMount = () => {
    const { expenses } = this.props.expenses;
    const { filters } = this.props;
    this.props.get_expenses(expenses, filters);
  };

  componentDidUpdate = prevProps => {
    if (prevProps.filters.text !== this.props.filters.text) {
      const { expenses } = this.props.expenses;
      const { filters } = this.props;
      this.props.get_expenses(expenses, filters);
    }
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
            <div className="col m8 offset-m2 card">
              <Link to={`/expenses/${expense.id}`}>
                <span className="card-title">{expense.description}</span>
              </Link>
              <p>{expense.amount}</p>
              <p>{expense.note}</p>
              <p>{expense.created_at.format('MMMM Do, YYYY')}</p>
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
          <div className="col m8 offset-m2 center-align">
            <div className="component-heading">Expense List</div>
          </div>
          <div className="col m2 center-align">
            <Link to={"/expenses/create"} className="btn green">
              Create <i className="material-icons custom-icon">add</i>
            </Link>
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
