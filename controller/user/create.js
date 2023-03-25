const bcrypt = require('bcrypt');
const services = require('../../services/user/index');

const create = async (req, res) => {
  const { name, email, password, date } = req.body;

  if (!name || !email || !password || !date) {
    return res.status(400).json({
      message: 'Dados incompletos',
    });
  }
  // crypto password
  const passwordCrypt = await bcrypt.hash(password, 10);

  // create user
  const isOk = await services.create(name, email, passwordCrypt, date);

  if (!isOk) {
    return res.status(400).json({
      message: 'Erro ao criar usuário',
    });
  }

  return res.status(201).json({ id: isOk });
};

module.exports = create;
