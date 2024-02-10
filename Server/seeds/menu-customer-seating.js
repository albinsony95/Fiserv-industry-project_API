// import seed data files, arrays of objects
const customerData = require('../seed-data/customers');
const menuData = require('../seed-data/menu_items');
const seatingData = require('../seed-data/seating');

exports.seed = function (knex) {
  return knex('seating').del()
    .then(function () {
        return knex('menu_items').del();
      })
    .then(function () {
      return knex('customers').del();
    })
    .then(() => {
      return knex('customers').insert(customerData);
    })
    .then(() => {
      return knex('menu_items').insert(menuData);
    })
    .then(function () {
      return knex('seating').insert(seatingData);
    });
    
    
};
