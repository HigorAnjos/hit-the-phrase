const connection = require('../connection');
require('dotenv').config();

const update = async (name, email, password, userId, date) => {
  const query = `UPDATE ${process.env.DB_NAME || 'acerteafrase'}.usuarios SET nome = ?, nascimento = ?, email = ?, senha = ? WHERE idUsuarios = ?`;
  const [result] = await connection.execute(query, [name, date, email, password, userId]);
  return result;
};

module.exports = update;
