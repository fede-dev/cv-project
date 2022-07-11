const express = require("express");
const router = express.Router();
const commentService = require("../service/commentService");

router.get("/", async (req, res) => {
  try {
    const comments = await commentService.getAllComments();
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json("No comments " + error);
  }
});

router.post("/crear-comentario", async (req, res) => {
  try {
    const comment = req.body;
    const result = await commentService.getCreateComment(comment);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json("can´t create comment " + error);
  }
});

module.exports = router;
