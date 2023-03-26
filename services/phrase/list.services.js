const model = require('../../models/phrase/index.models');

const list = async (id) => {
  const phrases = await model.list(id);

  if (!phrases) {
    return false;
  }

  return phrases;
};

module.exports = list;
