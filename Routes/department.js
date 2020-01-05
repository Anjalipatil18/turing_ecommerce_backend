const express = require('express')
const department = express.Router()
department.use(express.json())
const getDepartment = require('../Model/department.js')

department.get('/departments',(req,res)=>{
    let response = getDepartment.selectData()
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

department.get('/departments/:department_id',(req,res)=>{
    var department_id=req.params.department_id
    let response = getDepartment.selectDataById(department_id)
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

module.exports=department