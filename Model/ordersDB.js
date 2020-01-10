const knex=require('./knex')

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

let getData=(order_id)=>{
    return knex.select("product.name as product_name","shopping_cart.product_id","shopping_cart.quantity","shopping_cart.attributes","product.price as unit_cost").from('shopping_cart').innerJoin('product').innerJoin('orders').where("order_id",order_id)
}

let insertData=(getData)=>{
    return knex.from('order_detail').insert(getData)
}

module.exports={joinData,insertInOrders,selectData,orderDataById,getData,insertData}