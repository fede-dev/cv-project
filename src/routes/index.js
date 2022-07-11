const express = require("express");
const router = express.Router();

const usuarios = require("./user.routes");
const productos = require("./product.routes");
const blogs = require("./blog.routes");
const comments = require("./comment.routes");

router.use("/usuarios", usuarios);
router.use("/productos", productos);
router.use("blogs", blogs);
router.use("comments", comments);

module.exports = router;
