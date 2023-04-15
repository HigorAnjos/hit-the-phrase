const services = require('../../services/cards/index.services');

const list = async (req, res) => {
  const { id } = req.user;
  const phrases = req.body;

  await services.newphrase(id, ...phrases);

  return res.status(201).json('ok');
};

module.exports = list;
