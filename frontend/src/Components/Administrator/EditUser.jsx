import React, { useEffect } from "react";
import {
  TextField,
  Button,
  Paper,
  Divider,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  FormControl,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";
export const EditUser = ({ seekers, editId }) => {
  const handleChange = (e) => {
    const { value, name, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setUser((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };
  const history = useHistory();
  console.log("-----data-----------", seekers, editId);
  var data = seekers && seekers.filter((item) => item._id == editId);
  console.log(data);
  const [user, setUser] = useState(data[0]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    axios({
      method: "POST",
      url: `http://localhost:5000/api/user/update/${editId}`,
      data: user,
    });
    window.location.reload(false);
    // history.push("/");
  };
  //   console.log(user);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <TextField
                value={user.name}
                name="name"
                onChange={handleChange}
                label="Edit name"
                variant="filled"
              />
              <br />
              <br />
              <TextField
                value={user.title}
                onChange={handleChange}
                name="title"
                // id="outlined-textarea"
                label="Edit Job Title"
                // placeholder="Placeholder"
                // multiline
                // rowsMax={1}
                // fullWidth
                variant="filled"
              />
              <br />
              <br />
              <TextField
                value={user.email}
                name="email"
                onChange={handleChange}
                //   id="standard-password-input"
                label="Edit Email"
                type="email"
                variant="filled"
                //   autoComplete="current-password"
              />
              <br />
              <br />
              <TextField
                value={user.phone}
                name="phone"
                onChange={handleChange}
                label="Edit Phone no"
                type="number"
                variant="filled"
              />
              <br />
              <br />
              <TextField
                value={user.location}
                name="location"
                onChange={handleChange}
                label="Edit Location"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                value={user.jobDescription}
                name="jobDescription"
                onChange={handleChange}
                //   id="outlined-multiline-static"
                label="Edit Job description"
                multiline
                rows={4}
                //   defaultValue="Default Value"
                variant="outlined"
              />
              <br />
              <br />
              <TextField
                value={user.experience}
                name="experience"
                onChange={handleChange}
                // id="outlined-textarea"
                label="Edit Experience"
                // placeholder="Placeholder"
                multiline
                rowsMax={1}
                variant="filled"
              />
              <br />
              <br />
              <TextField
                value={user.skills}
                name="skills"
                onChange={handleChange}
                //   id="outlined-multiline-static"
                label="Edit key skills"
                multiline
                rows={5}
                //   defaultValue="Default Value"
                variant="outlined"
              />
            </div>
          </div>
          <br />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onSubmit={handleSubmit}
          >
            Submit
          </Button>
        </form>
        <br />
      </div>
      <Divider />
    </>
  );
};
