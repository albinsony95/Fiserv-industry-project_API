const router = require('express').Router();
const customersController = require('../controllers/customersController');

router.route('/')
.get(customersController.index)
.post(customersController.add);

router.route("/:id")
.get(customersController.findOne)
.patch(customersController.update)
.delete(customersController.remove);

module.exports = router;
