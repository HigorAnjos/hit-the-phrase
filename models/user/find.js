const connection = require('../connection');
require('dotenv').config();

const find = async (email) => {
  const query = `SELECT * FROM ${process.env.DB_NAME}.usuarios WHERE email = ?`;

  const [user] = await connection.execute(query, [email]);

  return user;
};

module.exports = find;
