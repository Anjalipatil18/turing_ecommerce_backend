const express = require('express')
const products = express.Router()
products.use(express.json())
const getcategories = require("../Model/products")

products.get('/products',(req,res)=>{
    let response = getcategories.selectData()
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

products.get('/products/search/:name/:limit',(req,res)=>{
    var name=req.params.name
    var limit=req.params.limit
    let response = getcategories.getDatabyname(name)
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})



module.exports=products