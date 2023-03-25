const connection = require('../connection');
require('dotenv').config();

const create = async (name, email, password) => {
  console.log('nameaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  console.log('name', name);
  console.log('email', email);
  console.log('password', password);

  const query = `INSERT INTO ${process.env.DB_NAME}.usuarios (nome, idade, email, senha) VALUES (?, ?, ?, ?)`;

  const res = await connection.execute(query, [name, 0, email, password]);
  console.log('res', res);
  return insertId;
};

module.exports = create;
