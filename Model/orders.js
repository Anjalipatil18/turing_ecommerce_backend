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

let selectData=()=>{
    return knex.select("*").from("orders")
}

let orderDataById=(order_id)=>{
    return knex.select("product.name","orders.total_amount","orders.shipped_on","orders.created_on","orders.status","orders.order_id").from('orders').innerJoin('product').where("order_id",order_id)
}

module.exports={joinData,insertInOrders,selectData,orderDataById}