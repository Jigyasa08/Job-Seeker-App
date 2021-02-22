const mongoose = require("mongoose");
const data = require("./data/data");
const User = require("./models/User");
const connectDB = require("./config/db");

connectDB();
const importData = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(data);
    console.log("Data imported");
    process.exit();
  } catch (err) {
    console.log(`Error ${err}`);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await User.deleteMany();
    console.log("data destroyed");
    process.exit();
  } catch (err) {
    console.log(`Error ${err}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
