const knex = require('knex')(require('../knexfile'));

const index = (_req, res) => {
  knex('order')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Users: ${err}`)
    );
};

module.exports = {
  index
}
