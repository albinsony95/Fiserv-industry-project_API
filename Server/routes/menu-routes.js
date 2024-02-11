const router = require('express').Router();
const menuController = require('../controllers/menuController');

router.route('/').get(menuController.index).post(menuController.add);
router.route("/:id").get(menuController.findOne);

module.exports = router;
