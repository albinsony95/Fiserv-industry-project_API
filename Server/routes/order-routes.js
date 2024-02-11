const router = require('express').Router();
const orderController = require('../controllers/orderController');

router.route('/').get(orderController.index);

module.exports = router;
