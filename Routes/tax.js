const express = require('express')
const tax = express.Router()
tax.use(express.json())
const getcategories = require("../Model/tax")

tax.get('/tax',(req,res)=>{
    let response = getcategories.selectData()
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

tax.get('/tax/:tax_id',(req,res)=>{
    var tax_id=req.params.tax_id
    let response = getcategories.selectDataById(tax_id)
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})



module.exports=tax