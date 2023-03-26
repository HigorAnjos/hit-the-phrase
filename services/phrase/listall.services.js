const phraseModel = require('../../models/phrase/index.models');
const typeModel = require('../../models/type/index.models');
const categoryModel = require('../../models/category/index.models');

const listall = async () => {
  const phrases = await phraseModel.listall();
  const types = await typeModel.list();
  const categories = await categoryModel.list();

  if (!phrases || !types || !categories) {
    return false;
  }

  const phrasesWithTypesAndCategories = phrases.map((phrase) => ({
    id: phrase.idFrases,
    phrase: phrase.frase,
    points: phrase.ponto,
    type: types.find((type) => (type.idTipos === phrase.tipo ? type.tipos : '')),
    category: categories.find((category) => (category.idCategorias === phrase.categoria ? category.categoria : '')),
  }));

  return phrasesWithTypesAndCategories;
};

module.exports = listall;
