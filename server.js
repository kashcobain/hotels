
// // console.log('server ki file');
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
import express from 'express';

const app = express();

// Route for home page — accessible at http://localhost:3002/
app.get('/', (req, res) => {
  res.send('Hello badmos');
});

// Route for /chicken — accessible at http://localhost:3002/chicken
app.get('/chicken', (req, res) => {
  res.send('Hello sir, aapka khana');
});
app.get('/idli', (req, res) => {
    var customized_idli={
        name: 'rava idli',
        size: '10 cm',
        is_sambhar:true,
        is_chutney:true

    }
  res.send(customized_idli);
});
// Start the server on port 3002
app.listen(3002, () => {
  console.log('✅ Server running at http://localhost:3002');
});

