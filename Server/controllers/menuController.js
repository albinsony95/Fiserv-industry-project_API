const knex = require('knex')(require('../knexfile'));

const index = (_req, res) => {
  knex('menu_items')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Menu: ${err}`)
    );
};

module.exports = {
  index
}
