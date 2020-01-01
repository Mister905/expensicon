import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import moment from "moment";

class DateRangeInput extends Component {
  state = {
    focused_input: null,
    start_date: this.props.filters.start_date,
    end_date: this.props.filters.end_date
  };

  render() {
    return (
      <div id="custom-date-range-picker-wrapper">
        <DateRangePicker
          startDate={this.state.start_date}
          startDateId="start_date_filter"
          endDate={this.state.end_date}
          endDateId="end_date_filter"
          onDatesChange={({ startDate, endDate }) => {
            this.setState({ start_date: startDate, end_date: endDate });
          }}
          focusedInput={this.state.focused_input}
          onFocusChange={focused_input => this.setState({ focused_input })}
          daySize={50}
          showClearDates={true}
        />
      </div>
    );
  }
}

export default DateRangeInput;
