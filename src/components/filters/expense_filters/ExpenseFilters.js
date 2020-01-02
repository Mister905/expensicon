import React, { Component } from "react";
import TextSearchFilter from "../text_search_filter/TextSearchFilter";
import SortByFilter from "../sort_by_filter/SortByFilter";
import DateRangeFilter from "../date_range_filter/DateRangeFilter";

class ExpenseFilters extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col m12 center-align">
            <div className="component-heading">Filter Expenses</div>
          </div>
        </div>
        <TextSearchFilter />
        <SortByFilter />
        <DateRangeFilter />
      </div>
    );
  }
}

export default ExpenseFilters;
