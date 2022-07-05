const express = require("express");
const router = express.Router();
const productService = require("../service/productService");
const userService = require("../service/userService");

router.get("/", async (req, res) => {
  try {
    let result = await productService.getProducts();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json("No products to show" + error);
  }
});

router.post("/crear-producto", async (req, res) => {
  try {
    const product = req.body;
    const user_id = req.body.id;
    let result = await productService.uploadProduct(product);
    res.status(201).json({ id: result._id });
  } catch (error) {
    res.status(500).json("Can´t create product" + error);
  }
});

router.put("/actualizar-producto/:id", async (req, res) => {
  try {
    const product = req.body;
    const product_id = req.params.id;
    let product_update = await productService.updateProduct(
      product_id,
      product
    );
    res.status(200).json(product_update);
  } catch (error) {
    res.status(400).json("Product update denegade" + error);
  }
});

router.delete("/eliminar-producto/:id", async (req, res) => {
  try {
    const product_id = req.params.id;
    let product_delete = await productService.deleteProduct(product_id);
    res.status(200).json(product_delete);
  } catch (error) {
    res.status(400).json("Product delete denegade" + error);
  }
});

module.exports = router;
