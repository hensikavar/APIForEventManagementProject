const mongoose = require('mongoose');

const eventschema = mongoose.Schema({
    eventid:{
        type:Number,
    },

    eventName:{
        type:String,
        require:true
    },

    eventDate:{
        type:String,
        require:true
    },

    eventVenue:{
        type:String,
        require:true
    },

    eventTime:{
        type:String,
        require:true
    },

    eventCoordinator:{
        type:String,
        require:true
    },

    eventContact:{
        type:String,
        require:true
    },

    eventType:{
        type:String,
        require:true
    },

    eventMembers:{
        type:String,
        require:true
    },

    eventDescription:{
        type:String,
        require:true
    },
   
    // adminId:{
    //     type : mongoose.Schema.Types.ObjectId,
    //     require:true,
    //     ref:'admin'
    // }
}, {timestamps:true});

module.exports = mongoose.model("Event",eventschema);