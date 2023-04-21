const services = require('../../services/cards/index.services');

const list = async (req, res) => {
  const { id } = req.user;
  const phrases = req.body;

  const created = await services.newphrase(id, ...phrases);

  return res.status(201).json({ created });
};

module.exports = list;
