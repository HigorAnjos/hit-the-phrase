const service = require('../../services/category/index.service');

const list = async (_req, res) => {
  const categories = await service.list();

  if (!categories) {
    return res.status(400).json({
      message: 'Erro ao listar categorias',
    });
  }

  return res.status(200).json(categories);
};

module.exports = list;
