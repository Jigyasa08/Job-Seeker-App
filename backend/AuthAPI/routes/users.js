// const express = require("express");
// const router = express.Router();
// const { getUser, addUser } = require("../controllers/user-controller");

// router.get("/users", getUser);
// router.post("/users", addUser);

// module.exports = router;
//

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const User = require("../models/User");

router.post("/register", async (req, res) => {
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) {
    return res.status(400).json("Email is already registered");
  }

  const hashedPassword = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(10)
  );

  const user = new User({
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send("Email is not registered");
  }

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).send("Invalid Password");
  }
  res.send("logged in");
});

module.exports = router;
