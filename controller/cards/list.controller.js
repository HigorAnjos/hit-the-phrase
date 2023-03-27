const services = require('../../services/cards/index.services');

const list = async (req, res) => {
  const { id } = req.user;

  const phrases = await services.list(id);

  if (!phrases) {
    return res.status(400).json({ message: 'Não foi possivel listar suas frases' });
  }

  return res.status(200).json(phrases);
};

module.exports = list;
