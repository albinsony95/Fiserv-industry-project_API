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

module.exports = {
  index
}
