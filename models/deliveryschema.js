const { text } = require("express");
const mongoose = require("mongoose");

const deliveryschema = new mongoose.Schema({
    names: {
        type : String,
        required : true
    },
    addresss :{
        type: String,
        required: true
    },
    quantitys : {
        type : Number,
        required : true
    },
    prices : {
        type : Number,
        required : true
    },
    charges : {
        type : Number,
        required : false
    },


}) ;

//creating collection
const deliverycollection = new mongoose.model("orderDetails",deliveryschema);

module.exports = deliverycollection;