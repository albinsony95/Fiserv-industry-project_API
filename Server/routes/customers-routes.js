const router = require('express').Router();
const customersController = require('../controllers/customersController');

router.route('/').get(customersController.index);

module.exports = router;
