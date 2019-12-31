import React, { Component } from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import M, { Datepicker } from "materialize-css";
import { create_expense } from "../../../actions/expenses";
import { Link } from "react-router-dom";
import CurrencyInput from "../../utils/currency_input/CurrencyInput";
import moment from "moment";
import DateInput from '../../utils/date_input/DateInput';


class ExpenseCreate extends Component {
  constructor(props) {
    super(props);
    this.note_textarea = React.createRef();
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.values.note !== this.props.values.note) {
      M.textareaAutoResize(this.note_textarea.current);
    }
  };

  validate_derp = (e) => {
    console.log(e)
  }

  render() {
    const { errors, touched, setFieldValue, handleBlur } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col m2 offset-m2 center-align">
            <Link to={"/"} className="btn green">
              <i className="material-icons custom-icon">arrow_back</i>
            </Link>
          </div>
          <div className="col m4 center-align">
            <div className="component-heading">Create Expense</div>
          </div>
        </div>
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
                <Field
                  name="amount"
                  component={CurrencyInput}
                />
                <label
                  htmlFor="amount"
                  className={
                    "active" +
                    (errors.amount ? " error-label" : "")
                  }
                >
                  Amount
                </label>
                {errors.amount && (
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
              <DateInput />
            </div>
          </div>
          <div className="row">
            <div className="col m4 offset-m4">
              <button type="submit" className="btn right green">
                Create
                <i className="material-icons custom-icon">add</i>
              </button>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

const Formik = withFormik({
  mapPropsToValues(props) {
    return {
      description: "",
      amount: "",
      note: "",
      created_at: moment()
    };
  },
  validateOnBlur: false,
  validateOnChange: false,
  validationSchema: Yup.object().shape({
    description: Yup.string().required().label('Description'),
    amount: Yup.string().required().label('Amount')
  }),
  handleSubmit(values, props) {
    props.props.create_expense(values, props.props.history);
  }
})(ExpenseCreate);

export default connect(null, { create_expense })(Formik);
