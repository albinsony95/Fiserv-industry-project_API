/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
      .createTable("menu_items", (table) => {
        table.increments("item_id").primary();
        table.string("item_name", 60).notNullable();
        table.string("item_description", 200).notNullable();
        table.decimal("price",10, 2).notNullable().defaultTo(0);
      })
      .createTable("customers", (table) => {
        table.increments("customer_id").primary();
        table.string("customer_name", 30).notNullable();
        table.string("preferred_payment_method", 30).notNullable();
        table.string("email", 50).notNullable();
      })
      .createTable("seating", (table) => {
        table.increments("order_id").primary();
        table.integer("menu_item_id").notNullable().defaultTo(0);
        table.integer("ordering_party").notNullable().defaultTo(0);
        table.string("special_instructions", 200);

        // table
        // .foreign("menu_item_id")
        // .unsigned()
        // .references("menu_items.item_id")
        // .onUpdate("CASCADE")
        // .onDelete("CASCADE");
        // table
        // .foreign("ordering_party")
        // .unsigned()
        // .references("customers.customer_id")
        // .onUpdate("CASCADE")
        // .onDelete("CASCADE");
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("menu_items").dropTable("customers").dropTable("seating");
  };