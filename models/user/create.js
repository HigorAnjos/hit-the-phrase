const connection = require('../connection');
require('dotenv').config();

const create = async (name, email, password, date) => {
  const query = `INSERT INTO ${process.env.DB_NAME}.usuarios (nome, nascimento, email, senha) VALUES (?, ?, ?, ?)`;

  const [{ insertId }] = await connection.execute(query, [name, date, email, password]);
  return insertId;
};

module.exports = create;
