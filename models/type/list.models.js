const connection = require('../connection');

const list = async () => {
  const query = 'SELECT * FROM tipos;';

  const [phrases] = await connection.execute(query);

  if (!phrases) {
    return false;
  }

  return phrases;
};

module.exports = list;
