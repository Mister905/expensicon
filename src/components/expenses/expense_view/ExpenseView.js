import React, { Component } from "react";
import { connect } from "react-redux";
import { get_expense, delete_expense } from "../../../actions/expenses";
import Preloader from "../../../components/layout/preloader/Preloader";
import { Modal, Button } from "react-materialize";
import { Link } from "react-router-dom";
import currency from "currency.js";
import moment from "moment";

class ExpenseView extends Component {
  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.props.get_expense(id);
  };

  handle_delete = () => {
    const { id } = this.props.match.params;
    const { history } = this.props;
    this.props.delete_expense(id, history);
  };

  render_expense = () => {
    const { current_expense } = this.props.expenses;
    return (
      <div>
        <div className="row">
          <div className="col m6 offset-m3 card">
            <div className="card-title expenses-title mt-25">
              {current_expense.description}
            </div>
            <p className="expense-list-amount">{current_expense.amount}</p>
            <div className="row">
              <div className="col m8 offset-m2">
                <p>{current_expense.note}</p>
              </div>
            </div>

            <p className="expense-list-created">
              Created On:{" "}
              {moment(current_expense.created_at).format("MMMM Do, YYYY")}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col m2 offset-m7">
            <div className="row">
              <div className="col m6 right-align">
                <Modal
                  actions={[
                    <div className="row">
                      <div className="col m4 offset-m8">
                        <div className="row">
                          <div className="col m6">
                            <Button
                              flat
                              modal="close"
                              node="button"
                              className="btn green white-text"
                            >
                              Cancel
                            </Button>
                          </div>
                          <div className="col m6">
                            <Button
                              flat
                              node="button"
                              waves="green"
                              className="btn btn-modal-delete red white-text"
                              onClick={this.handle_delete}
                            >
                              Confirm
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ]}
                  bottomSheet={false}
                  fixedFooter={false}
                  id="modal-0"
                  trigger={
                    <Button
                      node="button"
                      className="btn red btn-delete white-text"
                    >
                      <i className="material-icons">delete</i>
                    </Button>
                  }
                >
                  <div className="row">
                    <div className="col m12 center-align">
                      <div className="delete-record-heading green-text">Delete Record?</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col m12 center-align">
                      <p className="confirmation-message">
                        Are you sure you want to proceed with record deletion?
                      </p>
                    </div>
                  </div>
                </Modal>
              </div>
              <div className="col m6 right-align">
                <Link
                  to={`/expenses/edit/${current_expense.id}`}
                  className="btn btn green btn-edit"
                >
                  <i className="material-icons">edit</i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { loading_current_expense } = this.props.expenses;

    return (
      <div>
        <div className="row mt-50">
          <div className="col m2 offset-m2">
            <Link to={"/expenses"} className="btn green">
              <i className="material-icons custom-icon">arrow_back</i>
            </Link>
          </div>
          <div className="col m4 center-align">
            <div className="component-heading">Expense Details</div>
          </div>
        </div>

        <div className="row">
          <div className="col m12 center-align">
            {loading_current_expense ? <Preloader /> : this.render_expense()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses
});

export default connect(mapStateToProps, { get_expense, delete_expense })(
  ExpenseView
);
