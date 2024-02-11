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

const add = (req, res) => {
  if (!req.body.customer_name) {
    return res
      .status(400)
      .send("Please check that the new customer has a valid name");
  }

  knex("customers")
    .insert(req.body)
    .then((result) => {
      return knex("customers")
        .where({ customer_id: result[0] })
    })
    .then((createdCustomer) => {
      res.status(201).json(createdCustomer);
    })
    .catch(() => {
      res.status(500).json({ message: "Unable to add new customer" });
    })
};

const update = (req, res) => {
  knex("customers")
    .where({ customer_id: req.params.id })
    .update(req.body)
    .then(() => {
      return knex("customers").where({
        customer_id: req.params.id,
      });
    })
    .then((updatedCustomer) => {
      res.json(updatedCustomer[0]);
    })
    .catch(() => {
      res
        .status(500)
        .json({ message: `Unable to update customer with ID: ${req.params.id}` });
    });
};

module.exports = {
  index,
  findOne,
  add,
  update
}
