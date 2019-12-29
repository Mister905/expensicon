import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Piggy from "../../../assets/img/piggy.png";

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper custom-nav-wrapper green">
            <NavLink to="/" className="brand-logo" activeClassName="active">
              <div className="logo-text">Expensicon</div>
              <img
                src={Piggy}
                alt="Expensicon Logo"
                className="responsive-img logo-img"
              />
            </NavLink>
            <ul
              id="nav-mobile"
              className="right hide-on-med-and-down height-100"
            >
              {/* https://stackoverflow.com/a/8577887 */}
              <li className="height-100 custom-nav-li">
                <NavLink
                  to="/expense/create"
                  activeClassName="active"
                  className="height-100"
                >
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
