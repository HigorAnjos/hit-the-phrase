const express = require('express');
const auth = require('../middlewares/auth');
const {
  listall,
} = require('../controller/phrase/index.controller');

const router = express.Router({ mergeParams: true });

router.get('/listall', listall);

module.exports = router;
