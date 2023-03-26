const services = require('../../services/phrase/index.services');

const listall = async (_req, res) => {
  const phrases = await services.listall();

  if (!phrases) {
    return res.status(400).json({ message: 'Não foi possivel listar as frases' });
  }

  return res.status(200).json(phrases);
};

module.exports = listall;
