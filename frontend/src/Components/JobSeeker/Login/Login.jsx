import React, { useState } from "react";
import { loginUserData } from "./LoginRedux/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import { loadData, saveData } from "../../../Redux/localStorage";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state) => state.auth.isAuth);

  const handleLogin = () => {
    dispatch(loginUserData({ email, password }));
    isAuth && history.push("/dashboard");
    saveData("isAuth", isAuth);
  };
  const handleRegister = () => {
    history.push("/");
  };
  return (
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
    </div>
  );
};
