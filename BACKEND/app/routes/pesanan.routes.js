module.exports = (app) => {
    const pesanans = require("../controllers/pesanan.controller.js");
    var router = require("express").Router();
  
    // create
    router.post("/", pesanans.create);
  
    // get all data
     router.get("/", pesanans.findAll);
  
    // find by id
    router.get("/:id", pesanans.findOne);
    
    // update
    router.put("/:id", pesanans.update);
    
    // delete
    router.delete("/:id", pesanans.delete);
  
    app.use("/api/pesanan", router);
  };
  