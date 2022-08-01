require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const router = require("./src/routes/router");
const urlDB = process.env.urlDB;
const port = process.env.port || 5003;

app.use(cors());
app.use(express.json({ extended: true }));
app.use(router);

mongoose.connect(urlDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
