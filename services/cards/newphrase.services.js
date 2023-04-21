const model = require('../../models/cards/index.models');

const newphrase = async (idUser, ...idsPhrases) => {
  const promises = idsPhrases.map((id) => model.create(idUser, id));
  await Promise.all(promises);
};

module.exports = newphrase;
