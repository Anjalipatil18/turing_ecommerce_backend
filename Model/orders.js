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

let joinData=(cart_id)=>{
    return knex.from('shopping_cart').innerJoin('product').where("cart_id",cart_id)
}

let insertInOrders=(joinData)=>{
    return knex.from("orders").insert(joinData)
}

module.exports={joinData,insertInOrders}