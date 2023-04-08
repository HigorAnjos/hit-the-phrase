const newCardsRandom = require('../user/newCardsRandom');

const Emitter = {
  events: {},

  on(event, callback) {
    Emitter.events[event] = Emitter.events[event] || [];
    Emitter.events[event].push(callback);
  },

  emit(event, ...rest) {
    if (event in Emitter.events === false) {
      return;
    }

    Emitter.events[event].forEach((e) => {
      e(...rest);
    });
  },
};

Emitter.on('userCreated', async (user) => {
  await newCardsRandom(user);
});

module.exports = Emitter;
