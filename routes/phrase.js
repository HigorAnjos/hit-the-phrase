const express = require('express');
const {
  listall,
} = require('../controller/phrase/index.controller');

const router = express.Router({ mergeParams: true });

router.get('/listall', listall);

module.exports = router;
