const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const RecieptRoutes = require("./routes/Recipt_summary_route")
const customersRoutes = require("./routes/customers-routes")
const menuRoutes = require("./routes/menu-routes")
const orderRoutes = require("./routes/order-routes")
const reviewRoutes = require("./routes/review-routes")
// const path = require('path');
const userPage = require("./routes/userpage_route");
const paymentPage = require("./routes/paymentpage_route");

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("Link validation middleware");
  next();
});

app.use("/Reciept", RecieptRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the visual world");
});

app.get("/db", (req, res) => {
  res.send("Database testing. Huzzah!");
});

app.use('/customers', customersRoutes);
app.use('/menu', menuRoutes);
app.use('/order', orderRoutes);
app.use('/review', reviewRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
