const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");

const getUser = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
};

const addUser = (req, res) => {
  const id = uuidv4();
  const { email, password } = req.body;

  const newUser = new User({
    id,
    email,
    password,
  });
  console.log(newUser);
  newUser
    .save()
    .then(() => res.json("User Added Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = { getUser, addUser };
