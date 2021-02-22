const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");

const getUser = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
};

const addUser = (req, res) => {
  const id = uuidv4();
  const {
    name,
    title,
    jobDescription,
    email,
    phone,
    experience,
    location,
    skills,
    cv,
    img,
  } = req.body;
  // console.log(name);

  const newUser = new User({
    id,
    name,
    title,
    jobDescription,
    email,
    phone,
    experience,
    location,
    skills,
    cv,
    img,
  });
  console.log(newUser);
  newUser
    .save()
    .then(() => res.json("User Added Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

const deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User Deleted Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

const editUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.id = req.body.id;
      user.name = req.body.name;
      user.title = req.body.title;
      user.jobDescription = req.body.jobDescription;
      user.email = req.body.email;
      user.phone = req.body.phone;
      user.experience = req.body.experience;
      user.skills = req.body.skills;
      user.cv = req.body.cv;
      user.img = req.body.img;

      user
        .save()
        .then(() => res.json("User updated Successfully"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = { getUser, addUser, deleteUser, editUser };
