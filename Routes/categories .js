const express = require('express')
const categories = express.Router()
categories.use(express.json())
const getcategories = require("../Model/categories")

categories.get('/categories',(req,res)=>{
    let response = getcategories.selectData()
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

categories.get('/getDataById/:category_id',(req,res)=>{
    var category_id=req.params.category_id
    let response = getcategories.selectDataById(category_id)
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

categories.get("/inProduct/:product_id",(req,res)=>{
    let product_id=req.params.product_id
    let response=getcategories.innerJoinData(product_id)
    .then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })  
});

categories.get("/inDepartment/:department_id",(req,res)=>{
    let department_id=req.params.department_id
    let response=getcategories.joinTable(department_id)
    .then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })  
});

module.exports=categories