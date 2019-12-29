import React, { Component } from "react";
import { connect } from "react-redux";
import { get_expenses } from "../../../actions/expenses";

class ExpenseList extends Component {
  componentDidMount = () => {
    const { expenses } = this.props;
    const { filters } = this.props;
    this.props.get_expenses(expenses, filters);
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col m12">
            <h1>Expense List</h1>
          </div>
        </div>
        <div className="row">
          <div className="col m12 card">
            <div className="card-content">
              <span className="card-title">Title</span>
              <p>Description</p>
              <p>Created At</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
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
