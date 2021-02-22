const express = require("express");
const router = express.Router();
const {
  getUser,
  addUser,
  deleteUser,
  editUser,
} = require("../controllers/user-controller");

router.get("/users", getUser);
router.post("/users", addUser);
router.delete("/users/:id", deleteUser);
router.post("/user/update/:id", editUser);

module.exports = router;
