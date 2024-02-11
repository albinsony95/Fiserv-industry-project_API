const knex = require('knex')(require('../knexfile'));

const index = (_req, res) => {
  knex('customers')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Customers: ${err}`)
    );
};

const findOne = (req, res) => {
  knex("customers")
    .where({ customer_id: req.params.id })
    .then((customerFound) => {

      if (customerFound.length === 0) {
        return res
          .status(404)
          .json({ message: `Customer with ID: ${req.params.id} not found` });
      }

      res.status(200).json(customerFound[0]);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve customer data for customer with ID: ${req.params.id}`,
      });
    });
}

module.exports = {
  index,
  findOne
}
