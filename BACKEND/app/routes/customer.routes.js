module.exports = (app) => {
    const customers = require("../controllers/customer.controller.js");
    var router = require("express").Router();
  
    // create
    router.post("/", customers.create);
  
    // get all data
    router.get("/", customers.findAll);
  
  // find by id
  router.get("/:id", customers.findOne);
  
  // update
  router.put("/:id", customers.update);
  
  // delete
  router.delete("/:id", customers.delete);
  
  app.use("/api/customer", router);
  
  };
  