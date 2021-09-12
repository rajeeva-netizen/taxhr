const mongoose = require("mongoose")
//defining the tax schema
const taxSchema = new mongoose.Schema({
    Basic: {
        type:Number,
        require:true
    },
   LTA: {
        type:Number,
        require:true
    },
    HRA: {
        type:Number,
        require:true
    },
    Food_allowance: {
        type:Number,
        require:true
    },
    Inv: {
        type:Number,
        require:true
    },
    Rent: {
        type:Number,
        require:true
    },
    cityType: {
        type:String,
        require:true
    },
    medInc: {
        type:Number,
        require:true
    }
})
const Tax = mongoose.model('taxes', taxSchema)
module.exports = Tax