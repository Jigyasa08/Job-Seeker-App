import { Paper } from "@material-ui/core";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "../Components/JobSeeker/Login/Login";
// import { PrivateRoute } from "./PrivateRoute";
import { Register } from "../Components/JobSeeker/Register/Register";
function Routes() {
  return (
    <Paper
      elevation={3}
      style={{ maxWidth: "300px", margin: "auto", padding: "50px" }}
    >
      <Switch>
        <Route exact path="/" render={() => <Register />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route render={() => <h4>Page not found</h4>} />
      </Switch>
    </Paper>
  );
}

export { Routes };
