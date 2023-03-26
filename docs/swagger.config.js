const PORT = process.env.PORT || 3001;

const swaggerConfig = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hit The Phrase',
      description: 'API para salvar seus contatos',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'https://hitthephrase.onrender.com/',
        description: 'Producao',
      },
      {
        url: `http://localhost:${PORT}`,
        description: 'Servidor local',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};

module.exports = swaggerConfig;
