const bcrypt = require("bcrypt");
const bcryptjs = require("bcryptjs");
const { User } = require("../model/user");

const getUsers = async () => {
  const users = await User.find().exec();
  return users;
};

/*cuando se crea el usuario hay que calidar el mail para que no se creen con mismo mail
if (user.email) {
  return;
} else {
  creacion user
*/
const getCreateUser = async (user) => {
  if (!user) {
    throw new Error("user has already declarded");
  } else {
    user.password = await bcryptjs.hash(user.password, 8);
    let newUser = await User.create(user);
    return newUser;
  }
};

const getUserById = async (user_id, update_user) => {
  const userId = await User.findByIdAndUpdate(user_id, update_user, {
    new: true,
  }).exec();
  return userId;
};

const getUserByEmail = async (user_find) => {
  const email = await User.findOne({ email: user_find }).exec();
  return email;
};

const deleteUserById = async (user_id) => {
  const deleteUser = await User.findByIdAndDelete(user_id).exec();
  return deleteUser;
};

module.exports = {
  getUsers,
  getCreateUser,
  getUserById,
  getUserByEmail,
  deleteUserById,
};
