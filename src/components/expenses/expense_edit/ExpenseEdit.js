import React, { Component } from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import M from "materialize-css";
import { get_expense, update_expense } from "../../../actions/expenses";
import { Link } from "react-router-dom";
import CurrencyInput from "../../utils/currency_input/CurrencyInput";
import Preloader from "../../../components/layout/preloader/Preloader";

class ExpenseEdit extends Component {
  constructor(props) {
    super(props);
    this.note_textarea = React.createRef();
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.values.note !== this.props.values.note) {
      try {
        M.textareaAutoResize(this.note_textarea.current);
      } catch (error) {
        console.log(error);
      }
    }
  };

  render_form = () => {
    const { errors, touched } = this.props;
    return (
      <div>
        <Form>
          <div className="row">
            <div className="col m4 offset-m4">
              <div className="input-field">
                <Field
                  type="text"
                  name="description"
                  className={
                    touched.description && errors.description && "invalid"
                  }
                />
                <label
                  htmlFor="description"
                  className={
                    "active" +
                    (touched.description && errors.description
                      ? " error-label"
                      : "")
                  }
                >
                  Description
                </label>
                {touched.description && errors.description && (
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
                <Field name="amount" component={CurrencyInput} />
                <label
                  htmlFor="amount"
                  className={
                    "active" +
                    (touched.amount && errors.amount ? " error-label" : "")
                  }
                >
                  Amount
                </label>
                {touched.amount && errors.amount && (
                  <span className="helper-text error-helper">
                    {errors.amount}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col m4 offset-m4">
              <div className="input-field">
                <Field
                  component="textarea"
                  name="note"
                  innerRef={this.note_textarea}
                  className={
                    `materialize-textarea ` +
                    (touched.note && errors.note ? "invalid" : "")
                  }
                />
                <label htmlFor="note" className="active">
                  Note
                </label>
                {touched.note && errors.note && (
                  <span className="helper-text error-helper">
                    {errors.note}
                  </span>
                )}
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
          <div className="col m2 offset-m2 center-align">
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
    const { description, amount, note } = props.expenses.current_expense;
    return {
      description: description || "",
      amount: amount || "",
      note: note || ""
    };
  },
  validationSchema: Yup.object().shape({
    description: Yup.string().required(),
    amount: Yup.string().required()
  }),
  handleSubmit: (values, props) => {
    const { id } = props.props.match.params;
    const { history } = props.props;
    // console.log(id)
    // console.log(history)
    // console.log(values)
    props.props.update_expense(id, values, history);
  }
})(ExpenseEdit);

const mapStateToProps = state => ({
  expenses: state.expenses
});

export default connect(mapStateToProps, { get_expense, update_expense })(
  Formik
);
