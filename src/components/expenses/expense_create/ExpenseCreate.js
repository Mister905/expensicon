import React, { Component } from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import M from "materialize-css";
import { create_expense } from '../../../actions/expenses';

class ExpenseCreate extends Component {
  constructor(props) {
    super(props);
    this.note_textarea = React.createRef();
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.values.note !== this.props.values.note) {
      console.log(this.note_textarea.current)
      M.textareaAutoResize(this.note_textarea.current);
    }
  };

  render() {
    const { values, errors, touched } = this.props;
    return (
      <div>
        <div className="row mt-25">
          <div className="col m12 center-align">
            <h1>Create Expense</h1>
          </div>
        </div>
        <Form>
          <div className="row mt-25">
            <div className="col m6 offset-m3">
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
            <div className="col m6 offset-m3">
              <div className="input-field">
                <Field
                  type="number"
                  name="amount"
                  className={touched.amount && errors.amount && "invalid"}
                />
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
            <div className="col m6 offset-m3">
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
            <div className="col m6 offset-m3">
              <button type="submit" className="btn right green">
                Create
              </button>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

const Formik = withFormik({
  mapPropsToValues({ description, amount, note }) {
    return {
      description: description || "",
      amount: amount || "",
      note: note || ""
    };
  },
  validationSchema: Yup.object().shape({
    description: Yup.string().required(),
    amount: Yup.number().required()
  }),
  handleSubmit(values, props) {
    props.props.create_expense(values);
  }
})(ExpenseCreate);

export default connect(null, {create_expense})(Formik);
