const models = require('../../models/user');
const emitter = require('../events/emitter');

const create = async (newUser) => {
  const { email } = newUser;

  const userHasTheSameEmailFound = await models.find(email);

  if (userHasTheSameEmailFound) {
    if (userHasTheSameEmailFound.email === email) {
      return null; // email já cadastrado
    }
  }

  const newUserId = await models.create(newUser);

  if (!newUserId) {
    return null;
  }

  emitter.emit('userCreated', { id: newUserId });

  return newUserId;
};

module.exports = create;
