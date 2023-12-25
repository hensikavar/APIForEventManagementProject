const express= require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app= express();
const eventrouter = require("./routes/eventroutes");
const adminrouter = require("./routes/adminroutes");
const studentrouter= require("./routes/studentroutes");
const mongoose= require("mongoose");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/event", eventrouter);
app.use("/admin", adminrouter);
app.use("/student", studentrouter);

mongoose.connect("mongodb+srv://ITInventors:DHNHF@cluster0.pvocwef.mongodb.net/TechEvent?retryWrites=true&w=majority",{ useNewUrlParser: true })
.then(()=>{

    app.listen(5000 , (req,res)=>{
        console.log("Server Started");
    });
})
.catch((error)=>{
    console.log(error);
})

app.get("/",(req,res)=>{
    res.send("hello");
})

