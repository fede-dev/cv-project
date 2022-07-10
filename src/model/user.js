const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user_schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    blogs: [{ type: Schema.Types.ObjectId, ref: "Blog" }],
  }
  // { timestamps: true }
);

const User = mongoose.model("User", user_schema);

module.exports = {
  User,
};
