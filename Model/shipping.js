const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Anjali2018@',
        database: 'Turing'
    }
}

const knex = require('knex')(options);

let selectData = ()=>{
    return knex.select("*").from("shipping_region")
}

let selectDataById=(shipping_region_id)=>{
    return knex.select("shipping.shipping_id","shipping.shipping_type","shipping.shipping_cost","shipping_region.shipping_region_id").from("shipping_region").innerJoin("shipping").where("shipping_region.shipping_region_id",shipping_region_id)
}

module.exports={selectData,selectDataById}