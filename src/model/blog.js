const mongoose = require("mongoose");
const { Schema } = mongoose;

const blog_schema = mongoose.Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});
const Blog = mongoose.model("Blog", blog_schema);

module.exports = {
  Blog,
};
