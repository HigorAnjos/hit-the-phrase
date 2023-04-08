const phraseServices = require('../phrase/index.services');
const modelCard = require('../../models/cards/index.models');

const cardsRandom = async (user) => {
  const carsList = await phraseServices.listall();

  const cards = [];

  while (cards.length < 20) {
    const card = carsList[Math.floor(Math.random() * carsList.length)];
    if (!cards.includes(card)) {
      cards.push(card);
    }
  }

  cards.forEach(async (card) => {
    await modelCard.create(user.id, card.id);
  });
};

module.exports = cardsRandom;
