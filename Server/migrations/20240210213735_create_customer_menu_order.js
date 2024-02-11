// Easy Drop Block
exports.up = function (knex) {
    return knex.schema
  .then(() => {
    // CREATE BASIC TABLES
    // Table to hold all menu items for the entire restaurant
    return knex.schema.createTable('menu_items', function(table) {
      table.increments('item_id').primary();
      table.string('item_name', 60).notNullable();
      table.string('item_description', 200);
      table.decimal('price', 10, 2);
      table.string('item_image', 2048);
    });
  })
  .then(() => {
    // Table to store new/returning customers along with key info for app use
    return knex.schema.createTable('customers', function(table) {
      table.increments('customer_id').primary();
      table.string('customer_name', 30);
      table.string('preferred_payment_method', 30);
      table.string('email', 50);
    });
  })
  .then(() => {
    // Table to house the items ordered for a particular physical table in the service area
    return knex.schema.createTable('order', function(table) {
      table.increments('order_id').primary();
      table.integer('menu_item_id').unsigned();
      table.integer('order_quantity').unsigned();
      table.integer('ordering_party').unsigned();
      table.string('special_instructions', 60);
      table.foreign('menu_item_id').references('menu_items.item_id').onDelete('CASCADE');
      table.foreign('ordering_party').references('customers.customer_id').onDelete('CASCADE');
    });
  })
}

  exports.down = function (knex) {
    return knex.schema.dropTable("menu_items").dropTable("customers").dropTable("seating");
  };
