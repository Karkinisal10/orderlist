const router = require("express").Router();
const path = require("path");
const deliverymodels = require("../models/deliveryschema");

router.post("/submit",async(req,res)=>{
    try {
        const name = req.body.name;
        const address = req.body.address;
        const quantity = req.body.quantity;
        const price = req.body.price;
        const deliverycharge = req.body.deliverycharge;

        const deliverylist = new deliverymodels({
            names : name,
            addresss : address,
            quantitys : quantity,
            prices : price,
            charges : deliverycharge,

            
        });
        const savedData = await deliverylist.save();
        res.redirect("/");
    
    } catch (error) {
        console.log(error);
    }
});

module.exports= router;