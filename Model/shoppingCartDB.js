const knex=require('./knex')

let selectData = (cart_id)=>{
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

let deleteByItemId=(cart_id)=>{
    return knex.from("shopping_cart").where("cart_id",cart_id).del()
}

let getShoppingCartByCartId = (cart_id)=>{
    return knex.select('*').from('shopping_cart').innerJoin('product').where("cart_id",cart_id)
}

let selectsaveForLater=(item_id)=>{
    return knex.select("cart_id","product_id","attributes","quantity","buy_now","added_on").from("shopping_cart").where("item_id",item_id)
}

let insertDatasaveforlater = (selectsaveForLater)=>{
    return knex.from('saveForLater').insert(selectsaveForLater)
}

let deletebyItemId=(item_id)=>{
    return knex.from("shopping_cart").where("item_id",item_id).del()
}

let getSavedShoppingCart =(cart_id)=>{
    return knex.select("product.price","product.name","shopping_cart.attributes","shopping_cart.item_id").from("shopping_cart").innerJoin("product").where("cart_id",cart_id)
}

let removeProduct=(item_id)=>{
    return knex.from("shopping_cart").where("item_id",item_id).del()
}

let selectforShoppingcart=(item_id)=>{
    return knex.select("cart_id","product_id","attributes","quantity","buy_now","added_on").from("saveForLater").where("item_id",item_id)
}

let insertDatainshoppingcart = (selectshopping_cart)=>{
    return knex.from('shopping_cart').insert(selectshopping_cart)
}

let movecartItemId=(item_id)=>{
    return knex.from("saveForLater").where("item_id",item_id).del()
}


module.exports={selectData,selectDataById,shoppingCartByCartId,updateShoppingCartByItemId,deleteByItemId,getShoppingCartByCartId,insertDatasaveforlater,selectsaveForLater, deletebyItemId,getSavedShoppingCart,removeProduct,selectforShoppingcart,insertDatainshoppingcart,movecartItemId}