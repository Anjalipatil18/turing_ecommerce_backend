const express = require('express')
const attribute = express.Router()
attribute.use(express.json())
const getcategories = require("../Model/attribute")

attribute.get('/attributes',(req,res)=>{
    let response = getcategories.selectData()
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

attribute.get('/attributes/:attribute_id',(req,res)=>{
    var attribute_id=req.params.attribute_id
    let response = getcategories.selectDataById(attribute_id)
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

attribute.get("/values/:attribute_id",(req,res)=>{
    let attribute_id=req.params.attribute_id
    let response=getcategories.innerJoinData(attribute_id)
    .then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })  
});

attribute.get("/inProduct/:product_id",(req,res)=>{
    let product_id=req.params.product_id
    let response=getcategories.multipleTable(product_id)
    .then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })  
});

module.exports=attribute