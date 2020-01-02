import React, { Component } from "react";
import { connect } from "react-redux";
import { get_expenses } from "../../../actions/expenses";
import Preloader from "../../layout/preloader/Preloader";
import { Link } from "react-router-dom";
import moment from "moment";

class ExpenseList extends Component {
  componentDidMount = () => {
    const { filters } = this.props;
    this.props.get_expenses(filters);
  };

  componentDidUpdate = prevProps => {
    if (prevProps.filters !== this.props.filters) {
      const { filters } = this.props;
      this.props.get_expenses(filters);
    }
  };

  render_expense_list = () => {
    const { loading_expenses } = this.props.expenses;
    const { expenses } = this.props.expenses;
    if (loading_expenses) {
      return (
        <div className="row mt-50">
          <div className="col m12 center-align">
            <Preloader />
          </div>
        </div>
      );
    } else {
      if (expenses.length > 0) {
        return expenses.map(expense => {
          return (
            <div key={expense.id} className="row">
              <div className="col m8 offset-m2 card">
                <Link to={`/expenses/${expense.id}`}>
                  <span className="card-title">{expense.description}</span>
                </Link>
                <p>{expense.amount}</p>
                <p>{expense.note}</p>
                <p>{moment(expense.created_at).format("MMMM Do, YYYY")}</p>
              </div>
            </div>
          );
        });
      } else {
        return (
          <div>
            <div className="row">
              <div className="col m12 center-align">
                <div>No expenses found...</div>
              </div>
            </div>
          </div>
        );
      }
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
              <i className="material-icons custom-icon">add</i>
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
