const express = require("express");
const router = express.Router();
const blogService = require("../service/blogService");
const userService = require("../service/userService");

router.get("/", async (req, res) => {
  try {
    let result = await blogService.getBlogedUsers();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json("Can´t found blog" + error);
  }
});

router.post("/crear-blog", async (req, res) => {
  try {
    const user = req.body.user_id;
    let result_id = await userService.findUserId(user);
    const blog = {
      title: req.body.title,
      body: req.body.body,
      user: result_id,
      comments: null,
    };
    const result = await blogService.getCreateBlog(blog);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json("Blog ain´t created");
  }
});

module.exports = router;
