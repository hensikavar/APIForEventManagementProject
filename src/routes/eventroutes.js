const express=require("express");
const eventrouter = express.Router();
const {createevent} =require("../controller/eventcontroller");
const {getevent} =require("../controller/eventcontroller")
const {getAllevent} =require("../controller/eventcontroller")
const {updatevent} =require("../controller/eventcontroller")
const {deleteevent} =require("../controller/eventcontroller")

eventrouter.post("/" , createevent)

eventrouter.get("/",getAllevent)

eventrouter.get("/:id",getevent)

eventrouter.put("/:id",updatevent)

eventrouter.delete("/:id",deleteevent)

module.exports=eventrouter;

