const express = require('express');
const auth = require('../middlewares/auth');
const {
  login, create, update, remove,
} = require('../controller/user');

const router = express.Router({ mergeParams: true });

router.post('/login', login);
router.post('/create', create);

module.exports = router;
