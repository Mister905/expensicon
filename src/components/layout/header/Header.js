import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Piggy from "../../../assets/img/piggy.png";
import { connect } from "react-redux";
import { logout } from "../../../actions/auth";

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
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <button className="btn btn-logout" onClick={this.props.logout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(null, { logout })(Header);
