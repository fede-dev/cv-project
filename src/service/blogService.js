const { getBlogs, createBlog } = require("../repository/blog.repository");

const getBlogedUsers = async () => {
  return await getBlogs();
};

const getCreateBlog = async (blog) => {
  return await createBlog(blog);
};

module.exports = {
  getBlogedUsers,
  getCreateBlog,
};
