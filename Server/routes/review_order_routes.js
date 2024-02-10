const router = require("express").Router();
const reviewOrderController = require("../controllers/review_order_controller");

router.route("/getReviewOrders").get(reviewOrderController.getReviewOrders);

module.exports = router;
