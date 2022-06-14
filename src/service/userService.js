const {
  getUsers,
  getCreateUser,
  getUserById,
  deleteUserById,
} = require("../repository/user.repository");

const getRegistedUsers = async () => {
  return await getUsers();
};

const registerNewUser = async (user) => {
  return await getCreateUser(user);
};

const findUserById = async (user_id, update_user) => {
  const userId = await getUserById(user_id, update_user);
  return userId;
};

const getDeleteUser = async (user_id) => {
  const deleteUser = await deleteUserById(user_id);
  return deleteUser;
};

module.exports = {
  getRegistedUsers,
  registerNewUser,
  findUserById,
  getDeleteUser,
};
