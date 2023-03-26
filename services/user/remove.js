const models = require('../../models/user/index');

const remove = (userId) => models.remove(userId); // retona uma promisse

module.exports = remove;
