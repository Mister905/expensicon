import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker, isInclusivelyBeforeDay } from "react-dates";
import moment from "moment";

class SingleDateInput extends Component {
  state = {
    focused: false,
    created_at: moment()
  };

  componentDidMount = () => {
    const { setFieldValue } = this.props.form;
    const { created_at } = this.props.form.values;
    if (this.props.current_expense) {
      this.setState({
        created_at: moment(created_at)
      });
      setFieldValue("created_at", moment(created_at));
    } else {
      setFieldValue("created_at", this.state.created_at);
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { setFieldValue } = this.props.form;
    if (prevState.created_at !== this.state.created_at) {
      setFieldValue("created_at", this.state.created_at);
    }
  };

  on_date_change = date => {
    this.setState({
      created_at: date
    });
  };

  on_focus_change = ({ focused }) => {
    this.setState(() => ({ focused }));
  };

  render() {
    return (
      <div id="custom-single-date-picker-wrapper">
        <SingleDatePicker
          date={this.state.created_at}
          onDateChange={date => this.on_date_change(date)}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          id="your_unique_id"
          daySize={50}
          withPortal={true}
          numberOfMonths={1}
          isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
        />
      </div>
    );
  }
}

export default SingleDateInput;
