const connection = require('../connection');
require('dotenv').config();

const create = async (newUser) => {
  const query = `INSERT INTO ${process.env.DB_NAME}.User (firstname, lastname, nickname, datebirth, email, password, gender, avatar, emailverified, gamesplayed, createdat) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    newUser.firstName,
    newUser.lastName,
    newUser.nickname,
    newUser.dateOfBirth,
    newUser.email,
    newUser.password,
    newUser.gender,
    newUser.avatar,
    newUser.emailVerified,
    newUser.gamesPlayed,
    newUser.createdAt,
  ];

  const sanitizedValues = values.map((value) => (value !== undefined ? value : null));

  const [{ insertId }] = await connection.execute(query, sanitizedValues);

  return insertId;
};

module.exports = create;
