import React, { useState } from "react";
import { loginUserData } from "./LoginRedux/action";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import { loadData, saveData } from "../../../Redux/localStorage";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isError = useSelector((state) => state.auth.isError);

  const handleLogin = () => {
    dispatch(loginUserData({ email, password }));
    !isError && saveData("isAuth", true);
    isAuth && history.push("/dashboard");
  };
  const handleRegister = () => {
    history.push("/");
  };
  return isLoading ? (
    <h4>Loading...</h4>
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
      New Here ?
      <br />
      <br />
      <Button variant="contained" onClick={handleRegister} color="primary">
        Go to Register
      </Button>
      <br />
      <br />
      {isAuth && (
        <>
          <h5>Login Successful</h5>
          <Redirect to="/dashboard" />
        </>
      )}
      {isError && <h5>Login Error, Please try again</h5>}
    </div>
  );
};
