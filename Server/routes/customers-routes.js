const router = require('express').Router();
const customersController = require('../controllers/customersController');

router.route('/').get(customersController.index);
router.route("/:id").get(customersController.findOne);

module.exports = router;
