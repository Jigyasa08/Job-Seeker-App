import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import { PrivateRoute } from "./PrivateRoute";
function Routes() {
  return (
    <div>
      <Switch>
        {/* <Route exact path="/" render={() => <Register />} /> */}
        <Route render={() => <h4>Page not found</h4>} />
      </Switch>
    </div>
  );
}

export { Routes };