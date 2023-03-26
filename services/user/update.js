const models = require('../../models/user/index');
// const find = require('./find');

const update = async (name, email, password, userId, date) => {
  const userHasTheSameEmailFound = await models.find(email);

  if (userHasTheSameEmailFound && userId !== userHasTheSameEmailFound.idUsuarios) {
    return 0; // email ja cadastrado
  }

  return models.update(name, email, password, userId, date);
};

module.exports = update;
