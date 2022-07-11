const {
  getComments,
  createComment,
} = require("../repository/comment.repository");

const getAllComments = async () => {
  return await getComments();
};

const getCreateComment = async (comment) => {
  return await createComment(comment);
};

module.exports = {
  getAllComments,
  getCreateComment,
};
