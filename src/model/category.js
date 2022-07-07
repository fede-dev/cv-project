// 1 prodcuto para una categoria.
const mongoose = require("mongoose");
const { Schema } = mongoose;

const category_shema = mongoose.Schema({
  categroy_name: {
    type: String,
    required: true,
  },
  category_product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
});

const Category = mongoose.model("Category", category_shema);

module.exports = {
  Category,
};
