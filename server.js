const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/adminRoutes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/api/", router);

port = process.env["PORT"] || 5000;

mongoose
  .connect(process.env["MONGODB"])
  .then(() => {
    console.log("MongoDB Connection successfull");
  })
  .catch((e) => {
    console.error(e);
  });
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
