const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: 'acerteafrase.mysql.database.azure.com',
  user: 'apihigor',
  password: '6X9u!ER4',
  database: 'acerteafrase',
  port: 3306,
  ssl: {}, // adicionado para estabelecer uma conexão segura
});

module.exports = connection;
