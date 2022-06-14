const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", routes);

app.use(function errorMiddlewre(err, req, res, next) {
  console.error(err);
  res.status(500).send(err);
});

PORT = process.env.PORT || 3000;

app.listen(PORT, async (error) => {
  if (error) {
    console.error(error);
    return;
  }
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fthnjdk.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    mongoose.set("debug", true);
    console.log(`Server in running at PORT ${PORT}`);
  } catch (error) {
    console.error(error);
  }
});
