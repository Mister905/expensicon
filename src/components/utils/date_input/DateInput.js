import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import moment from "moment";

class DateInput extends Component {
  state = {
    focused: false
  };

  on_date_change = date => {
    console.log("derp");
  };

  on_focus_change = props => {
    console.log(props);
  };

  render() {
    return (
      <div id="custom-datepicker-wrapper">
        <SingleDatePicker
          date={moment()} // momentPropTypes.momentObj or null
          onDateChange={date => this.on_date_change(date)} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          id="your_unique_id"
          daySize={50}
          withPortal={true}
        />
      </div>
    );
  }
}

export default DateInput;
