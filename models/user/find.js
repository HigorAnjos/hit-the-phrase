const connection = require('../connection');
require('dotenv').config();

const find = async (emailSearch) => {
  const query = `SELECT * FROM ${process.env.DB_NAME}.User WHERE email = ?`;

  const [[user]] = await connection.execute(query, [emailSearch]);

  return user;
};

// find('').then((result) => console.log(result));

module.exports = find;
