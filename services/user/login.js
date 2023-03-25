const bcrypt = require('bcrypt');
const models = require('../../models/user');

const login = async (email, userInsertedPassword) => {
  const userFound = await models.find(email);

  if (!userFound) {
    return false;
  }

  const isCorret = await bcrypt.compare(userInsertedPassword, userFound.senha);
  if (!isCorret) {
    return false;
  }

  return userFound;
};

module.exports = login;
