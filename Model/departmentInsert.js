const knex = require('../Model/knex')

let getDepartment=()=>{
    return knex.select("*").from("departmentl")
}

module.exports=getDepartment
