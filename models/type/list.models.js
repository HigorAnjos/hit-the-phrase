const connection = require('../connection');

const list = async () => {
  const query = 'SELECT * FROM Bundles;';

  const [phrases] = await connection.execute(query);

  if (!phrases) {
    return false;
  }

  return phrases;
};

module.exports = list;
