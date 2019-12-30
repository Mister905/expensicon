import React, { Component } from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  set_text_filter,
  sort_by_amount,
  sort_by_date
} from "../../../actions/filters";
import M from "materialize-css";

class ExpenseFilters extends Component {
  constructor(props) {
    super(props);
    this.select_filter = React.createRef();
  }

  componentDidMount = () => {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll("select");
      var instances = M.FormSelect.init(elems, null);
    });
  };

  handle_select_filter_change = e => {
    const { value } = e.target;
    console.log(value);
    if (value == "date") {
      this.props.sort_by_date();
    } else if (value == "amount") {
      this.props.sort_by_amount();
    }
  };

  render() {
    const { values, errors, touched, handleChange } = this.props;
    return (
      <div>
        <div className="row mt-25">
          <div className="col m12 center-align">
            <h2>Filter Expenses</h2>
          </div>
        </div>
        <Form>
          <div className="row">
            <div className="col m12">
              <div className="input-field input-group">
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
                <span className="suffix">
                  <button className="btn btn-floating waves-effect waves-light green">
                    <i className="material-icons">search</i>
                  </button>
                </span>
                {touched.search_text && errors.search_text && (
                  <span className="helper-text error-helper">
                    {errors.search_text}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col m12">
              <div className="input-field">
                <Field
                  as="select"
                  name="select_filter"
                  onChange={e => {
                    this.handle_select_filter_change(e);
                  }}
                >
                  <option value="date">Date</option>
                  <option value="amount">Amount</option>
                </Field>
              </div>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

const Formik = withFormik({
  mapPropsToValues(props) {
    const { text, sort_by } = props.filters;
    return {
      search_text: text || ""
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

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps, {
  set_text_filter,
  sort_by_amount,
  sort_by_date
})(Formik);
