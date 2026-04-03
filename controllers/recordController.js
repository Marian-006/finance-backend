
const Record = require("../models/Record");

exports.create = async (req,res)=>{
  const record = await Record.create({...req.body,createdBy:req.user.id});
  res.json(record);
};

exports.getAll = async (req,res)=>{
  const records = await Record.find();
  res.json(records);
};

exports.update = async (req,res)=>{
  const record = await Record.findByIdAndUpdate(req.params.id,req.body,{new:true});
  res.json(record);
};

exports.delete = async (req,res)=>{
  await Record.findByIdAndDelete(req.params.id);
  res.json({msg:"Deleted"});
};
