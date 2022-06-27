const mongoose = require("mongoose");

const Product = mongoose.model("product", {
  product_name: {
    type: String,
    required: true,
  },
  product_description: {
    type: String,
    required: true,
  },
  product_price: {
    type: String,
    required: true,
  },
  product_comments: {
    type: String,
    required: true,
  },
});

module.exports = {
  Product,
};
