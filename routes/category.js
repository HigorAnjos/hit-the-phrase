const express = require('express');
const {
  list,
} = require('../controller/category/index');

const router = express.Router({ mergeParams: true });

router.get('/list', list);

module.exports = router;
