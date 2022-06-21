const express = require("express");
const router = express.Router();
const userService = require("../service/userService");
const { error_handler } = require("../middleware/error_handler.js");
const verify_token = require("../middleware/jwt_auth");

router.get("/", async (req, res) => {
  try {
    let result = await userService.getRegistedUsers();
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json(error_handler(error, "Can´t found users", code_status));
  }
});

router.post("/registro", async (req, res) => {
  try {
    const user = req.body;
    const result = await userService.registerNewUser(user);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json("Can´t create a new user");
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = req.body;
    let user_found = await userService.findUserByEmail(user.email);
    if (!user_found) {
      res
        .status(404)
        .json(makeObjError(error, "user or password was invalid", 404));
    }
    const user_token = { user: user_found.email, id: user_found._id };

    const token = await userService.make_token(
      user_found.password,
      user.password,
      user_token
    );
    res.json({ token: token });
  } catch (error) {
    res.status(500).json("Bad request");
  }
});

//validar el token para ruta privada.

router.get("/profile", verify_token, (req, res) => {
  res.status(200).json("profile access");
});

router.put("/:id", async (req, res) => {
  try {
    const user_id = req.params.id;
    const update_user = req.body;
    const result = await userService.findUserById(user_id, update_user);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json("Can´t modify user");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user_id = req.params.id;
    const result = await userService.getDeleteUser(user_id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json("Can´t errase user");
  }
});

module.exports = router;
