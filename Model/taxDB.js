const knex=require('./knex')

let selectData = ()=>{
    return knex.select("*").from("tax")
}

let selectDataById=(id)=>{
    return knex.select("*").from("tax").where("tax_id",id)
}


module.exports={selectData,selectDataById}