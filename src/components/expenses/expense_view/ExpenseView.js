import React, { Component } from "react";
import { connect } from "react-redux";
import { get_expense, delete_expense } from "../../../actions/expenses";
import Preloader from "../../../components/layout/preloader/Preloader";
import { Modal, Button } from "react-materialize";
import { Link } from "react-router-dom";

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
            <span className="card-title">{current_expense.description}</span>
            <p>{current_expense.amount}</p>
            <p>{current_expense.note}</p>
            <p>{current_expense.created_at}</p>
          </div>
        </div>
        <div className="row">
          <div className="col m4 offset-m4">
            <div className="row">
              <div className="col m4 offset-m2">
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
                              Close
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
                              Delete
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
                    <Button node="button" className="btn red white-text">
                      Delete
                    </Button>
                  }
                >
                  <div className="row">
                    <div className="col m12 center-align">
                      <h1>Delete Record?</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col m12 center-align">
                      <p>
                        Are you sure you want to proceed with record deletion?
                      </p>
                    </div>
                  </div>
                </Modal>
              </div>
              <div className="col m4">
                <Link
                  to={`/expenses/edit/${current_expense.id}`}
                  className="btn btn green btn-edit"
                >
                  Edit
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
        <div className="row">
          <div className="col m12 center-align">
            <h1>Expense Details</h1>
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