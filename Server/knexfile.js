// Import dotenv to process environment variables from `.env` file.
require("dotenv").config();

module.exports = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    database: "fiserv_db",
    user: "root",
    password: "lemongrass@88",
    charset: "utf8",
  },
};