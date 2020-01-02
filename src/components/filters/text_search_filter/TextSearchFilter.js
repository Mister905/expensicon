import React, { Component } from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { set_text_filter } from "../../../actions/filters";

class TextSearchFilter extends Component {
  render() {
    return (
      <Form>
        <div className="row">
          <div className="input-field col m8 offset-m2">
            <Field type="text" name="search_text" />
            <label htmlFor="search_text">Search</label>
          </div>
          <div className="input-field col m2">
            <button
              className="btn btn-floating waves-effect waves-light green"
              type="submit"
            >
              <i className="material-icons">search</i>
            </button>
          </div>
        </div>
      </Form>
    );
  }
}

const Formik = withFormik({
  mapPropsToValues(props) {
    const { search_text } = props.filters;
    return {
      search_text: ""
    };
  },
  handleSubmit(values, props) {
    const { search_text } = values;
    props.props.set_text_filter(search_text);
  }
})(TextSearchFilter);

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps, {
  set_text_filter
})(Formik);
