import React from "react";
import { TextField, Button, Divider, Typography } from "@material-ui/core";
import { useState } from "react";
// import axios from "axios";
import { useHistory } from "react-router-dom";
import { JobSeekerDetails } from "./JobSeekerDetails";
import { DropzoneDialog, DropzoneArea } from "material-ui-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "./DashboardRedux/action";
import { loadData, saveData } from "../../../Redux/localStorage";
export const Dashboard = () => {
  const initState = {
    name: "",
    title: "",
    jobDescription: "",
    email: "",
    phone: "",
    experience: "",
    location: "",
    skills: "",
    cv: "",
    img: "",
  };
  const [user, setUser] = useState(initState);
  const [flag, setFlag] = useState(loadData("flag") || false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (e) => {
    const { value, name, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setUser((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCV = (files) => {
    user.cv = files;
    setOpen(false);
  };
  const handleImg = (files) => {
    user.img = files;
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setFlag(true);
    saveData("flag", true);
    saveData("user", user);
    // history.push("/students");
    dispatch(postUser(user));
  };
  const isError = useSelector((state) => state.user.error);

  console.log(isError);
  return flag ? (
    <JobSeekerDetails user={user} />
  ) : (
    <>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          <div>
            <Button variant="contained" onClick={handleOpen}>
              Add Image
            </Button>
            <DropzoneDialog
              open={open}
              onSave={handleImg}
              acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
              showPreviews={true}
              maxFileSize={5000000}
              onClose={handleClose}
            />
          </div>
          <br />
          <br />
          <TextField
            required
            value={user.name}
            name="name"
            onChange={handleChange}
            label="Enter name"
            variant="filled"
          />
          <br />
          <br />
          <TextField
            required
            value={user.title}
            onChange={handleChange}
            name="title"
            // id="outlined-textarea"
            label="Enter Job Title"
            // placeholder="Placeholder"
            // multiline
            // rowsMax={1}
            // fullWidth
            variant="filled"
          />
          <br />
          <br />
          <TextField
            required
            value={user.email}
            name="email"
            onChange={handleChange}
            //   id="standard-password-input"
            label="Email"
            type="email"
            variant="filled"
            //   autoComplete="current-password"
          />
          <br />
          <br />
          <TextField
            required
            value={user.phone}
            name="phone"
            onChange={handleChange}
            //   id="standard-password-input"
            label="Phone no"
            type="number"
            variant="filled"
            //   autoComplete="current-password"
          />
          <br />
          <br />
          <TextField
            required
            value={user.location}
            name="location"
            onChange={handleChange}
            label="Enter Location"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            required
            value={user.jobDescription}
            name="jobDescription"
            onChange={handleChange}
            //   id="outlined-multiline-static"
            label="Job description"
            multiline
            rows={4}
            //   defaultValue="Default Value"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            required
            value={user.experience}
            name="experience"
            onChange={handleChange}
            // id="outlined-textarea"
            label="Experience"
            // placeholder="Placeholder"
            multiline
            rowsMax={1}
            variant="filled"
          />
          <br />
          <br />
          <TextField
            required
            value={user.skills}
            name="skills"
            onChange={handleChange}
            //   id="outlined-multiline-static"
            label="key skills"
            multiline
            rows={10}
            //   defaultValue="Default Value"
            variant="outlined"
          />
          <br />
          <br />
          <br />
          <br />

          <Typography>Attach CV: </Typography>

          <DropzoneArea onChange={handleCV} />

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
      {isError && <h5>Something went wrong, please try again.</h5>}
    </>
  );
};
