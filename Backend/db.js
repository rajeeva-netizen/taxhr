const express = require('express')
const mongoose = require('mongoose')
// import userSchema from '../model/userschema'
const app  = express();
//connecting the mongoose
mongoose.Promise = global.Promise;
var conn = mongoose.connect('mongodb://localhost:27017/taxDb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connection successfull')
}).catch((e)=>{
    console.log(e)
})

module.exports = conn