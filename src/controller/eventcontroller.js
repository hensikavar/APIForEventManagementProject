const { json } = require("express");
const eventModel = require("../model/event");

const createevent = async (req,res)=>{
    const {eventid,eventName,eventDate,eventVenue,eventTime,eventCoordinator,eventContact,eventType,eventMembers,eventDescription}= req.body;
    const newevent = new eventModel({
        eventid:eventid,
        eventName:eventName,
        eventDate:eventDate,
        eventVenue:eventVenue,
        eventTime:eventTime,
        eventCoordinator:eventCoordinator,
        eventContact:eventContact,
        eventType:eventType,
        eventMembers:eventMembers,
        eventDescription:eventMembers,
        //adminid:req.adminid,
    });

    try{
        await newevent.save();
        res.status(201).json(newevent);
    }
    catch (error){
        console.log(error);
        res.status(500).send({message : "data is not added"})
    }
}

const updatevent = async (req,res)=>{
    const {eventid,eventName,eventDate,eventVenue,eventTime,eventCoordinator,eventContact,eventType,eventMembers,eventDescription}= req.body;
     try {
        const editevent = await eventModel.findOne({eventid:req.params.id})
        editevent.eventid = eventid;
        editevent.eventName =eventName;
        editevent.eventDate = eventDate;
        editevent.eventVenue = eventVenue;
        editevent.eventTime = eventTime;
        editevent.eventCoordinator = eventCoordinator;
        editevent.eventContact = eventContact;
        editevent.eventType = eventType;
        editevent.eventMembers =eventMembers;
        editevent.eventDescription = eventMembers;
        await editevent.save()
        res.status(201).json(editevent)
        } 
        catch(error) {
            res.status(404)
            res.send({ error: "Faculty doesn't exist!" })
        }
    };

const deleteevent = async (req,res)=>{
    try {
        const delevent = await eventModel.findOne({eventid:req.params.id})
        await delevent.deleteOne();
        res.status(202).json(delevent);
        } 
    catch(error) {
        res.status(404)
        res.send({ error: "Smething went wrong" })
    }
}

const getevent = async (req,res)=>{
    try{
        const oneevent = await eventModel.find({eventid:req.params.id});
        res.status(200).json(oneevent);
    }
    catch(error){
        console.log(error);
        res.status(500).send({message : "data is not added"})
    }
}

const getAllevent = async (req,res)=>{
    allevent = await eventModel.find();
    res.send(allevent);
};

module.exports={createevent,updatevent,deleteevent,getevent,getAllevent}