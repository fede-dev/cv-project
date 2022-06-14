const { User } = require("../model/user");

const getUsers = async () => {
  const users = await User.find().exec();
  return users;
};

const getCreateUser = async (user) => {
  const newUser = await User.create(user);
  return newUser;
};

const getUserById = async (user_id, update_user) => {
  const userId = await User.findByIdAndUpdate(user_id, update_user, {
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
  deleteUserById,
};
