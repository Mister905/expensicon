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
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
