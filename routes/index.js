const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerConfig = require('../docs/swagger.config');

require('express-async-errors');
const user = require('./user');
const phrase = require('./phrase');
const cards = require('./cards');
const category = require('./category');

const root = express.Router({ mergeParams: true });

/**
 * @swagger
 *  tags:
 *    name: User
 *    description: Rotas de usuario
 */
root.use('/user', user);

/**
 * @swagger
 *  tags:
 *    name: Phrase
 *    description: Rotas de frases
 */
root.use('/phrase', phrase);

/**
 * @swagger
 *  tags:
 *    name: Cards
 *    description: Rotas de frases do usuario
 */
root.use('/cards', cards);

/**
 * @swagger
 *  tags:
 *    name: category
 *    description: Rotas de listar as categorias
 */
root.use('/category', category);

const swaggerDoc = swaggerJSDoc(swaggerConfig);
root.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

root.get('/', (_req, res) => res.send({ message: 'Hello World' }));

root.use((error, _req, res, _next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = root;
