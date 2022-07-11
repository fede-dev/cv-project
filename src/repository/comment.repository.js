const { Comment } = require("../model/comment");

const getComments = async () => {
  const comments = await Comment.find().exec();
  return comments;
};

const createComment = async (comment) => {
  if (!comment) {
    throw new Error("user has already declarded");
  } else {
    let newComment = await Comment.create(comment);
    return newComment.save();
  }
};

module.exports = {
  getComments,
  createComment,
};
