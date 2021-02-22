const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost/auth", {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongodb connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
