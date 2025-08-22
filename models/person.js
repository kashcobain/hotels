const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true,
    },
    mobile: {
        type: String,
        required: true,  // yaha spelling galat tha (reuired → required)
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    username:{
        required:true,
        type:String

    },
    password:{
        required:true,
        type:String

    }
});

// yaha schema object use karna hai, string nahi
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
