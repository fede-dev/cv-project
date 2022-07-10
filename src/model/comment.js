const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comment_schema = mongoose.Schema({
  body: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog",
  },
});

const Comment = mongoose.model("Comment", comment_schema);

module.exports = {
  Comment,
};
