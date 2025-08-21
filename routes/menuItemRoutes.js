const express=require('express');
const router=express.Router();
const MenuItem=require('./../models/MenuItem');
router.post('/',async (req,res)=>{
  try{
    const datas=req.body;
    const newMenu=new MenuItem(datas);
    const response=await newMenu.save();
     console.log('data saved');
    res.status(200).json(response);

  }catch(err){
     console.log(err);
    res.status(500).json({error:'internal sever error'});

  }
})
//comment added for testing purpose
module.exports=router;