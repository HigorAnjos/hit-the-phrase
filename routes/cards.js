const express = require('express');
const auth = require('../middlewares/auth');
const {
  list,
} = require('../controller/cards/index.controller');

const router = express.Router({ mergeParams: true });

router.get('/list', auth, list);

module.exports = router;
