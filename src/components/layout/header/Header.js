import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <NavLink to="/" className="brand-logo" activeClassName="active">
              Expensicon
            </NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <NavLink to="/expense/create" activeClassName="active">
                  Create Expense
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
