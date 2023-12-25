const mongoose = require('mongoose');

const studentschema = mongoose.Schema({
    studentid:{
        type:Number,
    },

    studentName:{
        type:String,
        require:true
    },

    studentEmail:{
        type:String,
        require:true
    },

    studentContact:{
        type:String,
        require:true
    },

    studentUniversity:{
        type:String,
        require:true
    },

    studentEventName:{
        type:String,  //keep it boolean
        require:true
    },

    studentEventtype:{
        type:String,  //keep it boolean
        require:true
    },

    studentTeamMembers:{
        type:Number,    //use and condition and display details of other member
        require:true
    },

    studentTeamName:{
        type:String,
        require:true
    },
   
    // adminId:{
    //     type : mongoose.Schema.Types.ObjectId,
    //     require:true,
    //     ref:'admin'
    // }
}, {timestamps:true});

module.exports = mongoose.model("Student",studentschema);