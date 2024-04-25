const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Require model
db.categories = require("./category.model.js")(sequelize, Sequelize);
db.products = require("./product.model.js")(sequelize, Sequelize);
db.keranjangs = require("./keranjang.model.js")(sequelize, Sequelize);
db.pesanans = require("./pesanan.model.js")(sequelize, Sequelize);
db.customers = require("./customer.model.js")(sequelize, Sequelize);

// membuat relasi One to many Category dengan Product
db.categories.hasMany(db.products, { as: "products" }); // as : "products" ini nanti dituliskan di include pada controlerr
db.products.belongsTo(db.categories, {
  foreignKey: "categoryId",
  as: "category", // as : "category" ini nanti dituliskan di include pada controlerr
});


// membuat relasi One to many Keranjang dengan Product
db.products.hasMany(db.keranjangs, { as: "keranjang" }); 
db.keranjangs.belongsTo(db.products, {
  foreignKey: "productId",
  as: "products", 
});

//membuat relasi One to many product dengan pesanan
db.products.hasMany(db.pesanans, { as: "pesanan" }); 
db.pesanans.belongsTo(db.products, {
  foreignKey: "productId",
  as: "products", 
});




// membuat relasi One to many customer dengan pesanan 
db.customers.hasMany(db.pesanans, { as: "pesanan" }); 
db.pesanans.belongsTo(db.customers, {
  foreignKey: "customerId",
  as: "customer", 
});





module.exports = db;
