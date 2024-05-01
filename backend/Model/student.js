const mongoose = require ('mongoose');

const studentschema = mongoose.Schema({
    name:String,
    phoneNumber:Number,
    email:String,
    password:String,
    dob: Date,
    batchName:String,
    mark:Number,
    gender:String,
})

const studentModel = mongoose.model('student',studentschema);
module.exports = studentModel;