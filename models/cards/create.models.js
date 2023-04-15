const connection = require('../connection');

const create = async (userId, idPhrase) => {
  // const query = 'INSERT INTO user_frase (idUser, idFrase, `like`) VALUES (?, ?, 0)';
  const query = 'INSERT INTO user_frase (idUser, idFrase, `like`) SELECT ?, ?, 0 FROM dual WHERE NOT EXISTS ( SELECT 1 FROM user_frase WHERE idUser = ? AND idFrase = ?);';

  const [result] = await connection.execute(query, [userId, idPhrase, userId, idPhrase]);

  if (result.affectedRows === 0) return null;

  return result.insertId;
};

module.exports = create;
