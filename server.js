

// // function add(a,b){
// //     return a+b;
// // }
// // var add=function(a,b){
// //     return a+b;
// // }
// // var add=(a,b)=>{return a+b;}
// var add=(a,b)=>a+b;
// var result=add(2,4);
// console.log(result);
// // K(); agar aisa likha hai to function hai
// (function(){
//     console.log('karan shandilya');
// })();
// function callback(){
//     console.log('prince is calling');
// }
// const add=function(a,b,callback){
//     var result=a+b;
//     console.log('result :'+ result);
//     callback();
// }
// const add=function(a,b,karan){
//     var result=a+b;
//     console.log('result :'+ result);
//     karan();
// }
// add(2,3,function(){
//     console.log('callback added');
// });
// add(2,3,()=>console.log('addition in different way'));
// var fs=require('fs');
// var os=require('os');
// var user=os.userInfo();
// console.log(user);
// fs.appendFile('greeting.txt','hi this is karan shandilya',()=>{
//     console.log('file is created');
// });
// server.js

// const notes = require('./notes.js');

// var age = notes.age;
// console.log(age); // Should print: 32

// var result = notes.addnumber(age + 18, 10);
// console.log('result is ' + result); // Should print: result is 60
// var _ = require('lodash');

// var data = ["person", "person", 1, 2, 3, 2, 1];

// var filter = _.uniq(data); // ✅ use _.uniq, not _.unique

// console.log(filter);
// console.log(_.isString(data));

// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const jsonObject = JSON.parse(jsonString); // Convert JSON string to object
// console.log(jsonObject.name); // Output: John

// const objectToConvert = { name: "Alice", age: 25 };
// const json = JSON.stringify(objectToConvert); // Convert object to JSON string
// console.log(json); // Output: {"name": "Alice", "age":25}
//  console.log(typeof(json));
// //locals host=computer adress =port number kamra number 
// app.post('/person',(req,res)=>{
//   const data=req.body// asuming the request body contains the eprson data
//   //create a new person document using the mongoose model
//   const newPerson=new Person(data);
//   //save the new person to database
//   newPerson.save((error,savedPerson)=>{
//     if(error){
//       console.log('eroor saving person data',error);
//       res.status(500).json({error:'internal server error'})

//     }else{
//       console.log('data saved successfully');
//       res.status(200).json(savedPerson);
//     }

//   })

  

// })
// Route for /chicken — accessible at http://localhost:3002/chicken
// app.get('/chicken', (req, res) => {
//   res.send('Hello sir, aapka khana');
// });
// app.get('/idli', (req, res) => {
//     var customized_idli={
//         name: 'rava idli',
//         size: '10 cm',
//         is_sambhar:true,
//         is_chutney:true

//     }
//   res.send(customized_idli);
// });
// Start the server on port 3002
// app.post('/items',(req,res)=>{
//  res.send('data is saved');
// })
const express=require('express');
const app = express();
const passport=require('passport');
const localStrategy=require('passport-local').Strategy;
require('dotenv').config();
const db=require('./db');
const Person=require('./models/person');
const bodyParser = require('body-parser');
const MenuItem=require('./models/MenuItem');
const logRequest=(req,res,next)=>{
  console.log(`${new Date().toLocaleString()} request made to :${req.originalUrl}`);
  next();
  
};
app.use(passport.initialize());
//pw ke liye
passport.use(new localStrategy(async (username,password,done)=>{
  //authentication logic
  try{
    console.log('recieved crredds',username,password);
    const user=await Person.findOne({username:username});
    if(!user)
    {
      return done(null,false,{message:'incorrect username'});
      
    }
    const isPasswordMatch=user.password==password?true:false;
    if(isPasswordMatch){
      return done(null,user);
    }else{
      return done(null,false,{message:'incorrect password'});
    }

  }catch(err){
return done(err);
  }
}))
app.use(logRequest);
app.get('/',logRequest,function(req,res){
  res.send('welcome to our hotel');
})

app.use(bodyParser.json());//stored in req.body

// Route for home page — accessible at http://localhost:3002/
app.get('/', logRequest ,(req, res) => {
  res.send('Hello badmos');
});
// app.get('/MenuItem',(req,res)=>{
//   res.send('hello chodhary saab');
// });
// app.post('/MenuItem',async (req,res)=>{
//   try{
//     const datas=req.body;
//     const newMenu=new MenuItem(datas);
//     const response=await newMenu.save();
//      console.log('data saved');
//     res.status(200).json(response);

//   }catch(err){
//      console.log(err);
//     res.status(500).json({error:'internal sever error'});

//   }
// })
// app.get('/person/:workType',async (req,res)=>{
//     try{
//     const workType=req.params.workType;
//     if(workType=='chef'||workType=='manager'||workType=='waiter'){
//         const response=await Person.find({work:workType});
//         console.log('resposne fetched');
//         res.status(200).json(response);

//     }
//     else{
//         res.status(404).json({error: 'invalid worktype'});
//     }}catch(err){
//         console.log(err);
//         res.status(500).json({error: 'internal server error'});

//     }
// })
// app.post('/person',async(req,res)=>{
//   try{
//     const data =req.body
//     const newPerson=new Person(data); // yaha Person constructor ka use ho raha hai
//     const response=await newPerson.save();
//     console.log('data saved');
//     res.status(200).json(response);
//   }catch(err){
//     console.log(err);
//     res.status(500).json({error:'internal sever error'});
//   }
// })
//get method to get the request
// app.get('/person',async (req,res)=>{
//   try{
//     const data=await Person.find();
//      console.log('data fetched');
//     res.status(200).json(data);


//   }catch(err){
//      console.log(err);
//     res.status(500).json({error:'internal sever error'});


//   }
// })
const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);
const menuItemRoutes=require('./routes/menuItemRoutes');
app.use('/menuItem',menuItemRoutes);
const PORT=process.env.PORT||3002;
app.listen(PORT, () => {
  console.log('✅ Server running at http://localhost:3002');
});
