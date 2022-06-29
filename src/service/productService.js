const {
  allProducts,
  createProduct,
  modifyProduct,
  productDelete,
} = require("../repository/product.repository");

const getProducts = async () => {
  return await allProducts();
};

const uploadProduct = async (product) => {
  return await createProduct(product);
};

const updateProduct = async (product_id, product) => {
  return await modifyProduct(product_id, product);
};

const deleteProduct = async (product_id) => {
  return await productDelete(product_id);
};

module.exports = {
  getProducts,
  uploadProduct,
  updateProduct,
  deleteProduct,
};
