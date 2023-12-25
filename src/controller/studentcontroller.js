const { json } = require("express");
const studentModel = require("../model/student");

const createstudent = async (req,res)=>{
    const {studentid,studentName,studentEmail,studentContact,studentUniversity,studentEventName,studentEventtype,studentTeamMembers,studentTeamName}= req.body;
    const newstudent = new studentModel({
        studentid:studentid,
        studentName:studentName,
        studentEmail:studentEmail,
        studentContact:studentContact,
        studentUniversity:studentUniversity,
        studentEventName:studentEventName,
        studentEventtype:studentEventtype,
        studentTeamMembers:studentTeamMembers,
        studentTeamName:studentTeamName,
        //adminid:req.adminid,
    });

    try{
        await newstudent.save();
        res.status(201).json(newstudent);
    }
    catch (error){
        console.log(error);
        res.status(500).send({message : "data is not added"})
    }
}

const updatstudent = async (req,res)=>{
    const {studentid,studentName,studentEmail,studentContact,studentUniversity,studentEventName,studentEventtype,studentTeamMembers,studentTeamName}= req.body;
     try {
        const editstudent = await studentModel.findOne({studentid:req.params.id})
        editstudent.studentid = studentid;
        editstudent.studentName =studentName;
        editstudent.studentEmail = studentEmail;
        editstudent.studentContact = studentContact;
        editstudent.studentUniversity = studentUniversity;
        editstudent.studentEventName=studentEventName;
        editstudent.studentEventtype = studentEventtype;
        editstudent.studentTeamMembers = studentTeamMembers;
        editstudent.studentTeamName = studentTeamName;

        await editstudent.save()
        res.status(201).json(editstudent)
        } 
        catch(error) {
            res.status(404)
            res.send({ error: "Faculty doesn't exist!" })
        }
    };

const deletestudent = async (req,res)=>{
    try {
        const delstudent = await studentModel.findOne({studentid:req.params.id})
        await delstudent.deleteOne();
        res.status(202).json(delstudent);
        } 
    catch(error) {
        res.status(404)
        res.send({ error: "Something went wrong" })
    }
}

const getstudent = async (req,res)=>{
    try{
        const onestudent = await studentModel.find({studentid:req.params.id});
        res.status(200).json(onestudent);
    }
    catch(error){
        console.log(error);
        res.status(500).send({message : "data is not added"})
    }
}

const getAllstudent = async (req,res)=>{
    allstudent = await studentModel.find();
    res.send(allstudent);
};

module.exports={createstudent,updatstudent,deletestudent,getstudent,getAllstudent}