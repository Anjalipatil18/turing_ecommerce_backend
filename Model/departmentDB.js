const knex=require('./knex')

let selectData = ()=>{
    return knex.select("*").from("department")
}

let selectDataById=(id)=>{
    return knex.select("*").from("department").where("department_id",id)
}

module.exports={selectData,selectDataById}