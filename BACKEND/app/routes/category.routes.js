module.exports = (app) => {
    const categories = require("../controllers/category.controller.js");
    var router = require("express").Router();
  
    // create
    router.post("/", categories.create);
  
    // get all data
     router.get("/", categories.findAll);
  
    // find by id
    router.get("/:id", categories.findOne);
    
    // update
    router.put("/:id", categories.update);
    
    // delete
    router.delete("/:id", categories.delete);
  
    app.use("/api/category", router);
  };
  