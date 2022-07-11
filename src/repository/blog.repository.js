const { Blog } = require("../model/blog");

const getBlogs = async () => {
  const blogs = await Blog.find().exec();
  return blogs;
};

const createBlog = async (blog) => {
  if (!blog) {
    throw new Error("blog has already exist");
  } else {
    let newBlog = await Blog.create(blog);
    return newBlog.save();
  }
};

module.exports = {
  getBlogs,
  createBlog,
};
