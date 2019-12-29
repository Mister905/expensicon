import React, { Component } from "react";
import { connect } from "react-redux";

class ExpenseFilters extends Component {
  render() {
    return <div>ExpenseFilters</div>;
  }
}

const mapStateToProps = state => ({
    filters: state.filters
})

export default connect(mapStateToProps)(ExpenseFilters);
