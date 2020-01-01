import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import moment from "moment";

class DateInput extends Component {

  state = {
    focused: false,
    created_at: this.props.current_expense.created_at ? (this.props.current_expense.created_at) : (null)
  };

  componentDidMount = () => {
    console.log(this.props)
    const { setFieldValue } = this.props.form;
    setFieldValue("created_at", this.state.created_at);
  }

  on_date_change = date => {
    const { setFieldValue } = this.props.form;
    setFieldValue("created_at", date);
  };

  on_focus_change = ({ focused }) => {
    this.setState(() => ({ focused }));
  };

  render() {
    return (
      <div id="custom-datepicker-wrapper">
        <SingleDatePicker
          date={this.state.created_at}
          onDateChange={date => this.on_date_change(date)}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          id="your_unique_id"
          daySize={50}
          withPortal={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

export default DateInput;
