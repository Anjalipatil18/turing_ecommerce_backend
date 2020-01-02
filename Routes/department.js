const express = require('express')
const department = express.Router()
department.use(express.json())
const getDepartment = require('../Model/knex.js')

department.get('/get',(req,res)=>{
    let response = getDepartment.selectData()
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

department.get('/getDataById/:id',(req,res)=>{
    var id=req.params.id
    let response = getDepartment.selectDataById(id)
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

module.exports=department