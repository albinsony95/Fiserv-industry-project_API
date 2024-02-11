const knex = require('knex')(require('../knexfile'));

const index = (_req, res) => {
  knex("order")
    .select(
      'order.order_id',
      'order.menu_item_id',
      'menu_items.item_name',
      'menu_items.price',
      'menu_items.item_image',
      'order.order_quantity',
      'order.ordering_party',
      'customers.customer_name',
      'order.special_instructions'
    )
    .join('menu_items', 'order.menu_item_id', '=', 'menu_items.item_id') // Ensure correct table names and join conditions
    .join('customers', 'order.ordering_party', '=', 'customers.customer_id') // Ensure correct table names and join conditions
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving Receipt Review: ${err}`)
    });

}

module.exports = {
  index
}
