const router = require('express').Router();
const databaseController = require('../controllers/database-controller');

router.route('/').get(databaseController.index);

module.exports = router;
