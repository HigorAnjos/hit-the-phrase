const express = require('express');
const auth = require('../middlewares/auth');
const {
  list,
  newphrase,
} = require('../controller/cards/index.controller');

const router = express.Router({ mergeParams: true });

router.get('/list', auth, list);
router.post('/newphrase', auth, newphrase);

module.exports = router;
