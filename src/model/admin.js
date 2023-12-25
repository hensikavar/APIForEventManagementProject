const mongoose = require('mongoose');

const adminschema = mongoose.Schema({
    adminid:{
        type:Number,
    },

    adminName:{
        type:String,
        require:true
    },

    adminEmail:{
        type:String,
        require:true
    },

    adminContact:{
        type:String,
        require:true
    },

    adminUserName:{
        type:String,
        require:true
    },

    adminPassword:{
        type:String,
        require:true
    },

   
}, {timestamps:true});

module.exports = mongoose.model("Admin",adminschema);