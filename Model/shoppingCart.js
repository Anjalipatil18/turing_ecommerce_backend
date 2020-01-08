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

let selectData = (generateUniqueId,cart_id)=>{
    return knex("shopping_cart").where("cart_id",cart_id)
}

let selectDataById=(id)=>{
    return knex.select("*").from("shopping_cart").where("shopping_cart_id",id)
}

module.exports={selectData,selectDataById}