const router = require('express').Router();
const orderController = require('../controllers/orderController');

router.route('/').get(orderController.index);
router.route("/:id").get(orderController.findOne);

module.exports = router;
