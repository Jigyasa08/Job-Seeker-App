const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

const connectDB = require("./config/db");
connectDB();

const userRoutes = require("./routes/users");
app.use("/api/", userRoutes);

app.listen(8000, () => {
  console.log(`The server is up and running.`);
});
