const connection = require('../connection');

const create = async (userId, idPhrase) => {
  const querySelect = 'SELECT 1 FROM user_frase WHERE idUser = ? AND idFrase = ?';

  const [resultSelect] = await connection.execute(querySelect, [userId, idPhrase]);

  if (resultSelect.length > 0) return null;

  const query = 'INSERT INTO user_frase (idUser, idFrase, `like`) VALUES (?, ?, 0)';
  const [result] = await connection.execute(query, [userId, idPhrase]);

  if (result.affectedRows === 0) return null;

  return result.insertId;
};

module.exports = create;
