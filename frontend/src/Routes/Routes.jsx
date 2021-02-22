import { Paper } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { AdminDashboard } from "../Components/Administrator/AdminDashboard";
import { AdminLogin } from "../Components/Administrator/AdminLogin";
import { Dashboard } from "../Components/JobSeeker/Dashboard/Dashboard";
import { Login } from "../Components/JobSeeker/Login/Login";
// import { PrivateRoute } from "./PrivateRoute";
import { Register } from "../Components/JobSeeker/Register/Register";
function Routes() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <Paper
      elevation={5}
      style={{ maxWidth: "900px", margin: "auto", padding: "30px" }}
    >
      <Switch>
        <Route exact path="/" render={() => <Register />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        {isAuth ? (
          <Route
            exact
            path="/dashboard"
            render={(props) => <Dashboard {...props} />}
          />
        ) : (
          <h3>Login First</h3>
        )}

        <Route
          exact
          path="/admin"
          render={(props) => <AdminLogin {...props} />}
        />
        <Route
          exact
          path="/adminDashboard"
          render={(props) => <AdminDashboard {...props} />}
        />
        <Route render={() => <h4>Page not found</h4>} />
      </Switch>
    </Paper>
  );
}

export { Routes };
