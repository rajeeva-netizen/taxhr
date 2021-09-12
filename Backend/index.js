const express = require('express')
const mongoose = require('mongoose')
let bodyParser = require('body-parser');
var app = express();
require ('./db')
const Tax = require('./taxSchema')
var port = 5000
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(function (req, res, next) {
   
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  
  //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    // Pass to next layer of middleware
    next();
  });
app.get('/', (req, res)=>{
    res.send('Hello welcome')
})

app.post('/postdata', async (req,res)=>{
    try{
        // let Basic = req.body.Basic;
        // const LTA = req.body.lta;
        // const HRA = req.body.hra;
        // const food = req.body.foodAll;
        // const Inv = req.body.inv;
        // const rent = req.body.rent;
        // const cityType = req.body.type;
        // const medInc = req.body.medinc;

        const addTax = new Tax({
            Basic:req.body.basic,
            LTA:req.body.lta,
            HRA:req.body.hra,
            Food_allowance:req.body.food,
            Inv:req.body.inv,
            Rent:req.body.rent,
            cityType:req.body.type,
            medInc:req.body.inc
        })

        addTax.save() 
       // db.collection
        res.send('transaction complete')
        
    }catch(err){
        res.send(err)
        console.log(err)
    }
})
app.listen(port, (req,res)=>{
    console.log(`port is listening on ${port}`)
})