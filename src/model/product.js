const mongoose = require("mongoose");
const { Schema } = mongoose;

const product_schema = mongoose.Schema({
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
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  product_category: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", product_schema);

module.exports = {
  Product,
};
