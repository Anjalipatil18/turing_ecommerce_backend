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

let joinData=()=>{
    return knex.select("product.price","shopping_cart.quantity").from('product').innerJoin('shopping_cart')
}

let insertInOrders=(joinData)=>{
    return knex.from()
}

module.exports={joinData}