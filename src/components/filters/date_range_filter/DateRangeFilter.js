import React, { Component } from "react";
import DateRangeInput from "../../utils/date_range_input/DateRangeInput";
import { withFormik, Form, Field } from "formik";
import { connect } from "react-redux";
import moment from "moment";
import { set_start_date, set_end_date } from "../../../actions/filters";

class DateRangeFilter extends Component {
  render() {
    const { filters } = this.props;
    return (
      <Form>
        <div className="row">
          <div className="input-field col m10 offset-m2">
            <span className="custom-label">Date Range</span>
            <Field
              name="date_range_filter"
              component={DateRangeInput}
              filters={filters}
            />
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
    const { start_date, end_date } = values;
    props.props.set_start_date(start_date);
    props.props.set_end_date(end_date);
  }
})(DateRangeFilter);

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps, {
  set_start_date,
  set_end_date
})(Formik);
