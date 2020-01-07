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
    return knex.select("*").from("shipping_region").where("shipping_region_id",shipping_region_id)
}


module.exports={selectData,selectDataById}