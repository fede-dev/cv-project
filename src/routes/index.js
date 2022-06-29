const express = require("express");
const router = express.Router();

const usuarios = require("./user.routes");
const productos = require("./product.routes");

router.use("/usuarios", usuarios);
router.use("/productos", productos);

module.exports = router;
