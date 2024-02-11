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

const findOne = (req, res) => {
  knex("menu_items")
    .where({ item_id: req.params.id })
    .then((menuItemFound) => {

      if (menuItemFound.length === 0) {
        return res
          .status(404)
          .json({ message: `Menu item with ID: ${req.params.id} not found` });
      }

      res.status(200).json(menuItemFound[0]);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve menu data for menu item with ID: ${req.params.id}`,
      });
    });
}

const add = (req, res) => {
  if (!req.body.item_description  || !req.body.item_name || !req.body.price) {
    return res
      .status(400)
      .send("Please check that menu item has a name, description, and price");
  }

  knex("menu_items")
    .insert(req.body)
    .then((result) => {
      return knex("menu_items")
        .where({ item_id: result[0] })
    })
    .then((createdMenuItem) => {
      res.status(201).json(createdMenuItem);
    })
    .catch(() => {
      res.status(500).json({ message: "Unable to create new menu item" });
    })
};

const update = (req, res) => {
  knex("menu_items")
    .where({ item_id: req.params.id })
    .update(req.body)
    .then(() => {
      return knex("menu_items").where({
        item_id: req.params.id,
      });
    })
    .then((updatedMenuItem) => {
      res.json(updatedMenuItem[0]);
    })
    .catch(() => {
      res
        .status(500)
        .json({ message: `Unable to update menu item with ID: ${req.params.id}` });
    });
};

const remove =  (req, res) => {
  knex("menu_items")
    .where({ item_id: req.params.id })
    .del()
    .then((result) => {
      if (result === 0) {
        return res.status(400).json({
          message: `Menu item with ID: ${req.params.id} to be deleted not found.`,
        });
      }

      // no content response
      res.status(204).send();
    })
    .catch(() => {
      res.status(500).json({ message: "Unable to delete menu item" });
    });
};

module.exports = {
  index,
  findOne,
  add,
  update,
  remove
}
