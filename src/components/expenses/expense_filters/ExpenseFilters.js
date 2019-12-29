import React, { Component } from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { set_text_filter } from "../../../actions/filters";

class ExpenseFilters extends Component {
  render() {
    const { values, errors, touched } = this.props;
    return (
      <div>
        <div className="row mt-25">
          <div className="col m12">
            <Form>
              <div className="row">
                <div className="col m6">
                  <div className="input-field">
                    <Field
                      type="text"
                      name="search_text"
                      className={
                        touched.search_text && errors.search_text && "invalid"
                      }
                    />
                    <label htmlFor="search_text" type="text" className="active">
                      Search
                    </label>
                    {touched.search_text && errors.search_text && (
                      <span className="helper-text error-helper">
                        {errors.search_text}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col m6">
                  <button type="submit" className="btn right green">
                    <span>Search</span>
                    <i className="material-icons custom-icon">search</i>
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const Formik = withFormik({
  mapPropsToValues({ search_text }) {
    return {
      search_text: search_text || ""
    };
  },
  validationSchema: Yup.object().shape({
    search_text: Yup.string()
  }),
  handleSubmit(values, props) {
    const { search_text } = values;
    props.props.set_text_filter(search_text);
  }
})(ExpenseFilters);

export default connect(null, { set_text_filter })(Formik);
