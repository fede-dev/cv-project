const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bcryptjs = require("bcryptjs");
const {
  getUsers,
  getCreateUser,
  getUserById,
  getUserByEmail,
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

const findUserByEmail = async (user_find) => {
  const userEmail = await getUserByEmail(user_find);
  return userEmail;
};

const getDeleteUser = async (user_id) => {
  const deleteUser = await deleteUserById(user_id);
  return deleteUser;
};

const generateToken = async (hashPassword, comparePassword, userToken) => {
  return new Promise((res, rej) => {
    if (bcryptjs.compareSync(comparePassword, hashPassword)) {
      jwt.sign(
        { user: userToken },
        process.env.SECRET_KEY,
        { expiresIn: "24h" },
        (err, token) => {
          if (err) {
            rej("password y usuario invalido");
          } else {
            res({ token });
          }
        }
      );
    } else {
      rej("Password y usuario invaldiso");
    }
  });
};

module.exports = {
  getRegistedUsers,
  registerNewUser,
  findUserById,
  findUserByEmail,
  getDeleteUser,
  generateToken,
};
