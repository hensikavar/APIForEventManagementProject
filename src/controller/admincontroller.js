const { json } = require("express");
const adminModel = require("../model/admin");

const createadmin = async (req,res)=>{
    const {adminid,adminName,adminEmail,adminContact,adminUserName,adminPassword}= req.body;
    const newadmin = new adminModel({
        adminid:adminid,
        adminName:adminName,
        adminEmail:adminEmail,
        adminContact:adminContact,
        adminUserName:adminUserName,
        adminPassword:adminPassword,
    });

    try{
        await newadmin.save();
        res.status(201).json(newadmin);
    }
    catch (error){
        console.log(error);
        res.status(500).send({message : "Something went wrong"})
    }
}

const updatadmin = async (req,res)=>{
    const {adminid,adminName,adminEmail,adminContact,adminUserName,adminPassword}= req.body;
     try {
        const editadmin = await adminModel.findOne({adminid:req.params.id})
        editadmin.adminid = adminid;
        editadmin.adminName =adminName;
        editadmin.adminEmail = adminEmail;
        editadmin.adminContact = adminContact;
        editadmin.adminUserName = adminUserName;
        editadmin.adminPassword = adminPassword;
        
        await editadmin.save()
        res.status(201).json(editadmin)
        } 
        catch(error) {
            res.status(404)
            res.send({ error: "Faculty doesn't exist!" })
        }
    };

const deleteadmin = async (req,res)=>{
    try {
        const deladmin = await adminModel.findOne({adminid:req.params.id})
        await deladmin.deleteOne();
        res.status(202).json(deladmin);
        } 
    catch(error) {
        res.status(404)
        res.send({ error: "Something went wrong" })
    }
}

const getadmin = async (req,res)=>{
    try{
        const oneadmin = await adminModel.find({adminid:req.params.id});
        res.status(200).json(oneadmin);
    }
    catch(error){
        console.log(error);
        res.status(500).send({message : "Something went wrong"})
    }
}

const getAlladmin = async (req,res)=>{
    alladmin = await adminModel.find();
    res.send(alladmin);
};

module.exports={createadmin,updatadmin,deleteadmin,getadmin,getAlladmin}