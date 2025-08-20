const mongoose=require('mongoose');
//define the mongodb url connectoiion
const mongoURL='mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL);

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb serrver');
});
db.on('error',(err)=>{
    console.log(' mongodb serrver error',err);
});
db.on('disconnected',()=>{
    console.log('disconnected  mongodb ');
});
module.exports=db;
