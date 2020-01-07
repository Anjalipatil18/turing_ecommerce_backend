const express = require('express')
const shipping = express.Router()
shipping.use(express.json())
const getShipping = require("../Model/shipping")

shipping.get('/shipping/regions',(req,res)=>{
    let response = getShipping.selectData()
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

shipping.get('/shipping/regions/:shipping_regions_id',(req,res)=>{
    var shipping_regions_id=req.params.shipping_regions_id
    let response = getShipping.selectDataById(shipping_regions_id)
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

module.exports=shipping