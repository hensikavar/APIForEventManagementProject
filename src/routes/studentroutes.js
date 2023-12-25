const express=require("express");
const studentrouter = express.Router();
const {createstudent,updatstudent,deletestudent,getstudent,getAllstudent} = require("../controller/studentcontroller")

studentrouter.post("/" , createstudent)

studentrouter.get("/",getAllstudent)

studentrouter.get("/:id",getstudent)

studentrouter.put("/:id",updatstudent)

studentrouter.delete("/:id",deletestudent)

module.exports=studentrouter;


