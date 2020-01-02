import React, { Component } from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { sort_by_amount, sort_by_date } from "../../../actions/filters";
import M from "materialize-css";

class SortByFilter extends Component {
  constructor(props) {
    super(props);
    this.select_filter = React.createRef();
  }

  componentDidMount = () => {
    var elem = document.querySelector("#select_filter");
    M.FormSelect.init(elem, null);
  };

  handle_select_filter_change = e => {
    const { value } = e.target;
    if (value == "date") {
      this.props.sort_by_date();
    } else if (value == "amount") {
      this.props.sort_by_amount();
    }
  };

  render() {
    return (
      <Form>
        <div className="row">
          <div className="input-field col m8 offset-m2">
            <Field
              id="select_filter"
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
      </Form>
    );
  }
}

const Formik = withFormik({
  mapPropsToValues(props) {
    const { search_text, sort_by, start_date, end_date } = props.filters;
    return {
      search_text: "",
      sort_by: "date",
      start_date,
      end_date
    };
  },
  handleSubmit(values, props) {
    const { search_text } = values;
    props.props.set_text_filter(search_text);
  }
})(SortByFilter);

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps, {
  sort_by_amount,
  sort_by_date
})(Formik);
