const express = require('express')
const department = express.Router()
department.use(express.json())
const departmentInsert = require('../Model/knex.js')

department.get('/get',(req,res)=>{
    let response = departmentInsert.selectData()
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

module.exports=department