const express = require("express");
const router = express.Router();

const usuarios = require("./user.routes");
router.use("/usuarios", usuarios);

module.exports = router;
