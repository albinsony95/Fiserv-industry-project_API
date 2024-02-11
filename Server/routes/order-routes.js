const router = require('express').Router();
const orderController = require('../controllers/orderController');

router.route('/').get(orderController.index).post(orderController.add);
router.route("/:id").get(orderController.findOne).patch(orderController.update);

module.exports = router;
