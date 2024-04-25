const express = require("express");
const cors = require("cors");
const app = express();

// setting origin cors
var corsoption = {
  origin: "http://localhost:3000",
};
// app.use(cors(corsoption));
app.use(cors());

// parse request content type - application/json
app.use(express.json());
// parse request application/x-www-force-urlencode
app.use(express.urlencoded({ extended: true }));

// sync database
const db = require("./app/models");
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("sync db");
  })
  .catch((err) => {
    console.log(`failed to sync karena ${err.message}`);
  });

// route /
app.get("/", (req, res) => {
  res.json({
    message: "Selamat datang di DB Ecommerse",
  });
});

//route category
require("./app/routes/category.routes")(app);

//route product
require("./app/routes/product.routes")(app);

//route keranjang
require("./app/routes/keranjang.routes")(app);

//route Pesanan
require("./app/routes/pesanan.routes")(app);

//route Customer
require("./app/routes/customer.routes")(app);

// setting port listen
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
