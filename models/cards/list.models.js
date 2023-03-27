const connection = require('../connection');

const list = async (id) => {
  const query = 'SELECT f.idFrases, f.frase, f.ponto, c.categoria, c.idCategorias, t.idTipos, t.tipos FROM usuarios as u INNER JOIN user_frase as uf on u.idUsuarios = uf.idUser INNER JOIN frases as f on uf.idFrase = f.idFrases INNER JOIN categorias as c on c.idCategorias = f.categoria INNER JOIN tipos as t on t.idTipos = f.tipo where u.idUsuarios = ?';

  const [phrases] = await connection.execute(query, [id]);

  if (!phrases) {
    return false;
  }

  return phrases;
};

module.exports = list;
