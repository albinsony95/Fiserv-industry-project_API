const knex = require('knex')(require('../knexfile'));

const index = (_req, res) => {
  knex("order")
    .select(
      'order.order_id',
      'order.menu_item_id',
      'menu_items.item_name',
      'menu_items.price',
      'order.order_quantity',
      // Calculate the item_total
      knex.raw('?? * ?? as item_total', ['menu_items.price', 'order.order_quantity']),
      'menu_items.item_image', 
      'order.ordering_party',
      'customers.customer_name',
      'order.special_instructions',
    )
    // Ensure correct table names and join conditions
    .join('menu_items', 'order.menu_item_id', '=', 'menu_items.item_id') 
    .join('customers', 'order.ordering_party', '=', 'customers.customer_id')
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
