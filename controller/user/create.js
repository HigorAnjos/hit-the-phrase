const bcrypt = require('bcrypt');
const services = require('../../services/user/index');
const User = require('../../Entities/user');

const create = async (req, res) => {
  const {
    firstName,
    lastName,
    nickName,
    birthDate,
    email,
    password,
    gender,
    avatar,
  } = req.body;

  if (!firstName || !email || !password || !birthDate) {
    return res.status(400).json({
      message: 'Dados incompletos',
    });
  }

  // Criptografar a senha
  const passwordHash = await bcrypt.hash(password, 10);

  // Criar instância do usuário
  const user = new User(
    firstName,
    lastName,
    nickName,
    birthDate,
    email,
    passwordHash,
    gender,
    avatar,
  );

  // Criar usuário
  const isCreated = await services.create(user);

  if (!isCreated) {
    return res.status(400).json({
      message: 'Erro ao criar usuário',
    });
  }

  console.log(`Requisição de ${user.firstName}`);

  return res.status(201).json({ id: isCreated });
};

module.exports = create;
