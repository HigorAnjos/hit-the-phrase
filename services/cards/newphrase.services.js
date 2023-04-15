const model = require('../../models/cards/index.models');

const newphrase = async (idUser, ...idsPhrases) => {
  idsPhrases.forEach(async (id) => {
    await model.create(idUser, id);
  });
};

module.exports = newphrase;
