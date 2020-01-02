import React, { Component } from "react";
import DateRangeInput from "../../utils/date_range_input/DateRangeInput";
import { withFormik, Form, Field } from "formik";
import { connect } from "react-redux";

class DateRangeFilter extends Component {
  render() {
    const { filters } = this.props;
    return (
      <Form>
        <div className="row">
          <div className="col m12">
            <div className="input-field">
              <span className="custom-label">Date Range</span>
              <Field
                name="date_range_filter"
                component={DateRangeInput}
                filters={filters}
              />
            </div>
          </div>
        </div>
      </Form>
    );
  }
}

const Formik = withFormik({
  mapPropsToValues(props) {
    const { start_date, end_date } = props.filters;
    return {
      start_date,
      end_date
    };
  },
  handleSubmit(values, props) {
    // const { search_text } = values;
    // props.props.set_text_filter(search_text);
  }
})(DateRangeFilter);

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps, {
//   sort_by_amount,
//   sort_by_date
})(Formik);