const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBSession = require("connect-mongodb-session")(session);
const routes = require("./routes");
require("dotenv").config();
PORT = process.env.PORT || 3000;
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fthnjdk.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const store = new MongoDBSession({
  uri: mongoURI,
  collection: "mySessions",
});

app.use(
  session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use(function errorMiddlewre(err, req, res, next) {
  console.error(err);
  res.status(500).send(err);
});

app.use("/api", routes);

app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - not found");
});

app.listen(PORT, async (error) => {
  if (error) {
    console.error(error);
    return;
  }
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.set("debug", true);
    console.log(`Server in running at PORT ${PORT}`);
  } catch (error) {
    console.error(error);
  }
});
