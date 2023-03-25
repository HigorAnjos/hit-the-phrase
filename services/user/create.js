const models = require('../../models/user');

const create = async (name, email, password, date) => {
  const userHasTheSameEmailFound = await models.find(email);

  if (userHasTheSameEmailFound) {
    if(userHasTheSameEmailFound.email === email) {
      return null; // email ja cadastrado
    }
  }

  const newUserId = await models.create(name, email, password, date);

  if (!newUserId) {
    return null;
  }
  return newUserId;
};

module.exports = create;
