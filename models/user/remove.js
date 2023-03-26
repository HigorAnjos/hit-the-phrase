const connection = require('../connection');
require('dotenv').config();

const remove = async (id) => {
  // criar codigo para remover usuario
  const query = `DELETE FROM ${process.env.DB_NAME || 'acerteafrase'}.usuarios WHERE idUsuarios = ?`;

  const [result] = await connection.execute(query, [id]);
  return result;
};

module.exports = remove;
