const connection = require('../connection');

const listall = async () => {
  const query = 'SELECT * FROM Phrase;';

  const [phrases] = await connection.execute(query);

  if (!phrases) {
    return false;
  }

  return phrases;
};

module.exports = listall;
