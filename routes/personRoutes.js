const express=require('express');
const router=express.Router();
const Person=require('./../models/person');
router.post('/',async(req,res)=>{
  try{
    const data =req.body
    const newPerson=new Person(data); // yaha Person constructor ka use ho raha hai
    const response=await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal sever error'});
  }
})
router.get('/',async (req,res)=>{
  try{
    const data=await Person.find();
     console.log('data fetched');
    res.status(200).json(data);


  }catch(err){
     console.log(err);
    res.status(500).json({error:'internal sever error'});


  }
})
router.get('/:workType',async (req,res)=>{
    try{
    const workType=req.params.workType;
    if(workType=='chef'||workType=='manager'||workType=='waiter'){
        const response=await Person.find({work:workType});
        console.log('resposne fetched');
        res.status(200).json(response);

    }
    else{
        res.status(404).json({error: 'invalid worktype'});
    }}catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'});

    }
})
//yahan id variable hai
router.put('/:id',async (req,res)=>{
  try{
    const personId=req.params.id;//extract the id from the url
    const updatedPersonData=req.body;//body mein scene set hoga
    const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
      new:true,
      runValidators:true,

    })
    if(!response){
      return res.status(404).json({error: 'person not found'});
    }
    console.log("data updatewd");
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
        res.status(500).json({error: 'internal server error'});

  }
})
router.delete('./:id',async (req,res)=>{
  try{
    const personId=req.params.id;
    const resposne= await Person.findByIdAndDelete(personId);
    if(!response){
      return res.status(404).json({error:"person not found"});
    }
  }catch(err){
     console.log(err);
        res.status(500).json({error: 'internal server error'});

  }

})
module.exports=router;