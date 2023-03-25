const connection = require('../connection');
require('dotenv').config();

const find = async (emailSearch) => {
  const query = `SELECT * FROM ${process.env.DB_NAME}.usuarios WHERE email = ?`;

  const [[user]] = await connection.execute(query, [emailSearch]);

  return user;
};

module.exports = find;
