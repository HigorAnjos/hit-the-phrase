const model = require('../../models/cards/index.models');

const newphrase = async (idUser, ...idsPhrases) => {
  const promises = idsPhrases.map((id) => model.create(idUser, id));
  const results = await Promise.all(promises);
  const ids = results.filter((id) => id !== null);
  return ids;
};

module.exports = newphrase;
