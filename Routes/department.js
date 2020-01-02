const express = require('express')
const department = express.Router()
department.use(express.json())

const departmentInsert = require('../Model/departmentInsert')

department.get('/get',(req,res)=>{
    let response = departmentInsert.getDepartment()
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

module.exports=department