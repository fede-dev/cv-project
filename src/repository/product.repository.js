const { Product } = require("../model/product");

const allProducts = async () => {
  const products = await Product.find().exec();
  return products;
};

const createProduct = async (product) => {
  const created_product = await Product.create(product);
  return created_product;
};

const modifyProduct = async (product_id, product) => {
  const change_product = await Product.findByIdAndUpdate(
    product_id,
    product
  ).exec();
  return change_product;
};

const productDelete = async (product_id) => {
  const destroy_product = await Product.findByIdAndDelete(product_id).exec();
  return destroy_product;
};

module.exports = {
  allProducts,
  createProduct,
  modifyProduct,
  productDelete,
};
