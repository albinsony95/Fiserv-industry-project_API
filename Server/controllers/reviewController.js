const knex = require('knex')(require('../knexfile'));

const index = (_req, res) => {
  // First, define a simpler subquery to ensure this part works
  const orderTotalsSubquery = knex.select([
    'ordering_party',
    knex.raw('SUM(menu_items.price * order.order_quantity) AS total_per_party')
  ])
  .from('order')
  .join('menu_items', 'menu_items.item_id', '=', 'order.menu_item_id')
  .groupBy('ordering_party')
  .as('order_totals');

  // Then, perform the main query and join the subquery
  knex('order')
    .select(
      'order.order_id',
      'order.menu_item_id',
      'menu_items.item_name',
      'menu_items.price',
      'order.order_quantity',
      
      // Calculate item_total for each row item (price * quantity)
      knex.raw('menu_items.price * order.order_quantity AS item_total'), 

      // Subtotal for each ordering_party
      knex.raw('SUM(menu_items.price * order.order_quantity) OVER (PARTITION BY order.ordering_party) AS ordering_party_subtotal'),
       
      'menu_items.item_image',
      'order.ordering_party',
      'customers.customer_name',
      'order.special_instructions',

      // Sum of all item_totals using a window function
      knex.raw('SUM(menu_items.price * order.order_quantity) OVER () AS group_subtotal') 
    )
    // Join with menu_items to get item details
    .join('menu_items', 'order.menu_item_id', '=', 'menu_items.item_id') 

    // Join with customers to get customer details
    .join('customers', 'order.ordering_party', '=', 'customers.customer_id') 

    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).send(`Error retrieving data: ${err}`);
    });
}


module.exports = {
  index
}
