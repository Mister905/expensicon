import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({
  is_authenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      is_authenticated ? (
        <div>
          <Redirect to="/expenses" />
        </div>
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  is_authenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
