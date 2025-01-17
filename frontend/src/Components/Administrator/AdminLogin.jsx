import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import { saveData } from "../../Redux/localStorage";
import { AdminDashboard } from "./AdminDashboard";

export const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  //   const dispatch = useDispatch();
  const history = useHistory();
  //   const isAuth = useSelector((state) => state.auth.isAuth);

  const handleLogin = () => {
    if (email === "admin" && password === "admin") {
      setAuth(true);
      history.push("/adminDashboard");
      saveData("adminAuth", true);
    } else {
      alert("Please enter valid credentials");
    }
  };
  const adminAuth = localStorage.getItem("adminAuth");
  console.log(adminAuth);

  return adminAuth ? (
    <AdminDashboard />
  ) : (
    <div>
      <br />
      <br />
      <TextField
        variant="outlined"
        label="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <TextField
        type="password"
        variant="outlined"
        label="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <Button variant="contained" onClick={handleLogin} color="primary">
        Login
      </Button>
      <br />
      <br />
    </div>
  );
};
