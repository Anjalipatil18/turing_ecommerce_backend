const express = require('express')
const categories = express.Router()
categories.use(express.json())
const getcategories = require("../Model/categories")

categories.get('/get',(req,res)=>{
    let response = getcategories.selectData()
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

categories.get('/getDataById/:id',(req,res)=>{
    var id=req.params.id
    let response = getcategories.selectDataById(id)
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

module.exports=categories