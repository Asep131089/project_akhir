module.exports = (app) => {
    const product = require("../controllers/product.controller.js");
    var router = require("express").Router();
  
    // create
    router.post("/", product.create);
  
    // get all data
    router.get("/", product.findAll);
  
  // find by id
  router.get("/:id", product.findOne);
  
  // update
  router.put("/:id", product.update);
  
  // delete
  router.delete("/:id", product.delete);
  
  app.use("/api/product", router);
  
  };
  