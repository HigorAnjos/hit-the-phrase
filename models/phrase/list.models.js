const connection = require('../connection');

const listall = async (id) => {
  const query = 'SELECT * FROM phrases WHERE category_id = ?';

  const [phrases] = await connection.execute(query, [id]);

  if (!phrases) {
    return false;
  }

  return phrases;
};

module.exports = listall;
