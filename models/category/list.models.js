const connection = require('../connection');

const format = (categories) => {
  const formattedCategories = categories.map((category) => ({
    id: category.idCategorias,
    category: category.categoria,
    createdAt: category.createdAt,
    updatedAt: category.updatedAt,
  }));

  return formattedCategories;
};

const list = async () => {
  const query = 'SELECT * FROM categorias;';

  const [phrases] = await connection.execute(query);

  if (!phrases) {
    return false;
  }

  return format(phrases);
};

module.exports = list;
