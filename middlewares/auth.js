const jwt = require('jsonwebtoken');
require('dotenv').config();

const API_SECRET = process.env.SECRET_KEY || 'mysecret';

// eslint-disable-next-line consistent-return
const auth = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        error: 'Token não informado',
      });
    }

    try {
      const decoded = jwt.verify(authorization, API_SECRET);

      const { id } = decoded.data;

      req.user = { id };
    } catch (err) {
      return res.status(400).json({
        message: 'Token inválido',
        error: err.message,
      });
    }
    next();
  } catch (err) {
    return res.status(500).json({
      message: 'Erro na autenticação',
    });
  }
};

module.exports = auth;
