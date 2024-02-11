const router = require('express').Router();
const menuController = require('../controllers/menuController');

router.route('/')
.get(menuController.index)
.post(menuController.add);

router.route("/:id")
.get(menuController.findOne)
.patch(menuController.update)
.delete(menuController.remove);

module.exports = router;
