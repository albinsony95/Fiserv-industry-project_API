// const knex = require("knex")(require("../knexfile"));

const getReviewOrders = (req, res) => {
  res.status(200).json({ message: "Your order summary is here" });
};
module.exports = {
  getReviewOrders,
};
