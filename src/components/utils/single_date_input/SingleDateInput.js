import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import moment from "moment";

class SingleDateInput extends Component {
  state = {
    focused: false,
    created_at: moment()
  };

  componentDidMount = () => {
    const { setFieldValue } = this.props.form;
    if (this.props.current_expense) {
      const { current_expense } = this.props;
      setFieldValue("created_at", current_expense.created_at);
    } else {
      setFieldValue("created_at", this.state.created_at);
    }
  };

  on_date_change = date => {
    this.setState({
      created_at: date
    })
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
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

export default SingleDateInput;
