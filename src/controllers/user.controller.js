const express = require("express");
const router = express.Router();
const userService = require("../service/userService");
const { error_handler } = require("../middleware/error_handler.js");
const verify_token = require("../middleware/jwt_auth");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userController = {
  all_users: async (req, res) => {
    try {
      let result = await userService.getRegistedUsers();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Can´t found users" + error);
    }
  },

  create_user: async (req, res) => {
    try {
      const user = req.body;
      const result = await userService.registerNewUser(user);
      res.status(201).json({ id: result._id });
    } catch (error) {
      res.status(500).json("Can´t create a new user" + error);
    }
  },

  login_user: async (req, res) => {
    try {
      const user = req.body;
      let user_find = await userService.findUserByEmail(user.email);
      if (!user_find) {
        res.status(404).json("user or password was invalid");
      }
      const userToken = { user: user_find.email, id: user_find.id };
      let token = await userService.generateToken(
        user_find.password,
        user.password,
        userToken
      );
      res.status(200).json({ token: token });
    } catch (error) {
      res.status(400).json("Bad request");
    }
  },

  user_profile: async (req, res) => {
    if (verify_token) {
      res.status(200).json("profile access");
    } else {
      res.status(500).json("Access Denegado");
    }
  },

  verify_user_token: async (req, res) => {
    jwt.verify(
      req.header("Authorization"),
      process.env.SECRET_KEY,
      (error, dataUser) => {
        if (error) {
          res.status(403).json("An Error on verification");
        } else {
          res
            .status(200)
            .json({ message: "Acceso Autorizado", dataUser: dataUser });
        }
      }
    );
  },

  crypt_compare: async (req, res) => {
    const password = req.body.password;
    if (password) {
      let passwordHash = await bcryptjs.hash(password, 8);
      res
        .status(200)
        .json({ message: "Encrypt Password OK!", passwordHash: passwordHash });
    } else {
      res.status(403).json("Denegado");
    }
  },
  email_user: async (req, res) => {
    try {
      const user = req.body;
      let user_find = await userService.findUserByEmail(user.email);
      res.status(200).json(user_find);
    } catch (error) {
      res.status(403).json("Denegado" + error);
    }
  },

  update_user: async (req, res) => {
    try {
      const user_id = req.params.id;
      const update_user = req.body;
      const result = await userService.findUserById(user_id, update_user);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Can´t modify user" + error);
    }
  },
  delete_user: async (req, res) => {
    try {
      const user_id = req.params.id;
      const result = await userService.getDeleteUser(user_id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Can´t errase user" + error);
    }
  },
};

module.exports = userController;
