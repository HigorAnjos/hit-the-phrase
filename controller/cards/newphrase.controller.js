const services = require('../../services/cards/index.services');

const list = async (req, res) => {
  const { id } = req.user;
  const {
    phrases
  } = req.body;

  await services.newphrase(...phrases, id)

  return res.status(200).json(phrases);
};

module.exports = list;
