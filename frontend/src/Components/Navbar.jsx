import { NavLink } from "react-router-dom";
import { AppBar, Typography } from "@material-ui/core";
import React from "react";

function Navbar() {
  return (
    <div>
      <AppBar position="fixed">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "20px",
          }}
        >
          <NavLink
            to="/dashboard"
            activeStyle={{ color: "red" }}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            <Typography> User Dashboard</Typography>
          </NavLink>
          <NavLink
            to="/admin"
            activeStyle={{ color: "red" }}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            <Typography> Admin Dashboard</Typography>
          </NavLink>
        </div>
      </AppBar>
    </div>
  );
}

export { Navbar };
