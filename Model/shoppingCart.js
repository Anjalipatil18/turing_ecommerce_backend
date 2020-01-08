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

let selectDataById=(addData)=>{
    return knex.from("shopping_cart").insert(addData)
}

let shoppingCartByCartId =(cart_id)=>{
    return knex.from("shopping_cart").where("cart_id",cart_id)
}

let updateShoppingCartByItemId = (item_id)=>{
    return knex.select('*').from('shopping_cart').innerJoin('product').where("item_id",item_id)
}

module.exports={selectData,selectDataById,shoppingCartByCartId,updateShoppingCartByItemId}