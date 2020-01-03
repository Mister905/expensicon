import React, { Component } from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import M from "materialize-css";
import { get_expense, update_expense } from "../../../actions/expenses";
import { Link } from "react-router-dom";
import CurrencyInput from "../../utils/currency_input/CurrencyInput";
import SingleDateInput from "../../utils/single_date_input/SingleDateInput";
import Preloader from "../../../components/layout/preloader/Preloader";
import currency from "currency.js";

class ExpenseEdit extends Component {
  constructor(props) {
    super(props);
    this.note_textarea = React.createRef();
  }

  componentDidUpdate = (prevProps, prevState) => {
    M.textareaAutoResize(this.note_textarea.current);
  };

  render_form = () => {
    const { current_expense } = this.props.expenses;
    const { errors } = this.props;
    return (
      <div>
        <Form>
          <div className="row">
            <div className="col m4 offset-m4">
              <div className="input-field">
                <span
                  className={
                    "custom-label" + (errors.description ? " error-label" : "")
                  }
                >
                  Description
                </span>
                <Field
                  type="text"
                  name="description"
                  className={errors.description && "invalid"}
                />
                {errors.description && (
                  <span className="helper-text error-helper">
                    {errors.description}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col m4 offset-m4">
              <div className="input-field">
                <span
                  className={
                    "custom-label" + (errors.amount ? " error-label" : "")
                  }
                >
                  Amount
                </span>
                <Field name="amount" component={CurrencyInput} />
                {errors.amount && (
                  <span className="helper-text error-helper">
                    {errors.amount.value}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col m4 offset-m4">
              <div className="input-field">
                <span className="custom-label">Notes</span>
                <Field
                  component="textarea"
                  name="note"
                  innerRef={this.note_textarea}
                  className="materialize-textarea"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col m4 offset-m4">
              <div className="input-field">
                <span className="custom-label">Date</span>
                <Field
                  name="created_at"
                  component={SingleDateInput}
                  current_expense={current_expense}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col m4 offset-m4">
              <button type="submit" className="btn right green">
                Update
                <i className="material-icons custom-icon update-icon">build</i>
              </button>
            </div>
          </div>
        </Form>
      </div>
    );
  };

  render() {
    const { id } = this.props.match.params;
    const { loading_current_expense } = this.props.expenses;
    return (
      <div>
        <div className="row">
          <div className="col m2 offset-m2">
            <Link to={`/expenses/${id}`} className="btn green">
              <i className="material-icons custom-icon">arrow_back</i>
            </Link>
          </div>
          <div className="col m4 center-align">
            <div className="component-heading">Edit Expense</div>
          </div>
        </div>
        {loading_current_expense ? (
          <div className="row">
            <div className="col m12 center-align">
              <Preloader />
            </div>
          </div>
        ) : (
          this.render_form()
        )}
      </div>
    );
  }
}

const Formik = withFormik({
  mapPropsToValues: props => {
    const {
      description,
      amount,
      note,
      created_at
    } = props.expenses.current_expense;
    return {
      description: description || "",
      amount: amount || "",
      note: note || "",
      created_at: created_at || ""
    };
  },
  validationSchema: Yup.object().shape({
    description: Yup.string()
      .required()
      .label("Description"),
    amount: Yup.string()
      .required()
      .label("Amount")
  }),
  validateOnBlur: false,
  validateOnChange: false,
  handleSubmit: (values, props) => {
    const { description, amount, note, created_at } = values;
    const { id } = props.props.match.params;
    const form_values = { id, ...values };
    const { history } = props.props;
    props.props.update_expense(id, form_values, history);
  }
})(ExpenseEdit);

const mapStateToProps = state => ({
  expenses: state.expenses
});

export default connect(mapStateToProps, { get_expense, update_expense })(
  Formik
);
