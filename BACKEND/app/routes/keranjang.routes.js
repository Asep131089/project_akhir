module.exports = (app) => {
    const keranjangs = require("../controllers/keranjang.controller.js");
    var router = require("express").Router();
  
    // create
    router.post("/", keranjangs.create);
  
    // get all data
     router.get("/", keranjangs.findAll);
  
    // find by id
    router.get("/:id", keranjangs.findOne);
    
    // update
    router.put("/:id", keranjangs.update);
    
    // delete
    router.delete("/:id", keranjangs.delete);
  
    app.use("/api/keranjang", router);
  };
  