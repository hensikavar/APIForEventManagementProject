const express=require("express");
const adminrouter = express.Router();
const {createadmin,updatadmin,deleteadmin,getadmin,getAlladmin} =require("../controller/admincontroller")

adminrouter.post("/" , createadmin)

adminrouter.get("/",getAlladmin)

adminrouter.get("/:id",getadmin)

adminrouter.put("/:id",updatadmin)

adminrouter.delete("/:id",deleteadmin)

module.exports=adminrouter;


