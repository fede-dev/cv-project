const bcryptjs = require("bcryptjs");
const { User } = require("../model/user");

const getUsers = async () => {
  const users = await User.find().exec();
  return users;
};

const getCreateUser = async (user) => {
  if (!user) {
    throw new Error("user has already declarded");
  } else {
    user.password = await bcryptjs.hash(user.password, 8);
    let newUser = await User.create(user);
    return newUser.save();
  }
};

const getUserByEmail = async (emailUser) => {
  const email = await User.findOne({
    email: emailUser,
  }).exec();
  return email;
};

const getUserById = async (user_id, update_user) => {
  const userId = await User.findByIdAndUpdate(user_id, update_user, {
    new: true,
  }).exec();
  return userId;
};

const getUserId = async (user_id) => {
  const userId = await User.findById(user_id, {
    new: true,
  }).exec();
  return userId;
};

const deleteUserById = async (user_id) => {
  const deleteUser = await User.findByIdAndDelete(user_id).exec();
  return deleteUser;
};

module.exports = {
  getUsers,
  getCreateUser,
  getUserById,
  getUserId,
  getUserByEmail,
  deleteUserById,
};
