const models = require('../../models/user');
const emitter = require('../events/emitter');

const create = async (name, email, password, date) => {
  const userHasTheSameEmailFound = await models.find(email);

  if (userHasTheSameEmailFound) {
    if (userHasTheSameEmailFound.email === email) {
      return null; // email ja cadastrado
    }
  }

  if (!date) {
    date = new Date();
  }

  const newUserId = await models.create(name, email, password, date);

  if (!newUserId) {
    return null;
  }

  emitter.emit('userCreated', { id: newUserId });

  return newUserId;
};

module.exports = create;
