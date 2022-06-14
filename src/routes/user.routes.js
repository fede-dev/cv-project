const express = require("express");
const router = express.Router();
const userService = require("../service/userService");

router.get("/", async (req, res) => {
  try {
    let result = await userService.getRegistedUsers();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json("Users not found");
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
