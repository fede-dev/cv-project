const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let result = await productService.getProducts();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json("No products to show" + error);
  }
});

router.post("/subir-producto", async (req, res) => {
  try {
    const product = req.body;
    let result = await productService.uploadProduct(product);
    res.status(201).json({ id: result._id });
  } catch (error) {
    res.status(500).json("Can´t create product" + error);
  }
});
