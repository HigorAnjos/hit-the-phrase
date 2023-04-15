const model = require('../../models/category/index.models');

const list = async () => {
  const categories = await model.list();

  if (!categories) {
    return false;
  }

  return categories;
};

module.exports = list;
