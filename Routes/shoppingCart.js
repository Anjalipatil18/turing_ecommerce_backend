const express = require('express')
const shoppingCart = express.Router()
shoppingCart.use(express.json())
var randomString = require('random-string');
let generateUniqueId = randomString();
const getshoppingCart = require("../Model/shoppingCart")

shoppingCart.get('/shoppingCart/generateUniqueId',(req,res)=>{
    let cart_id = req.body.cart_id
    let generateId = {
        cart_id : generateUniqueId
    }
    let response = getshoppingCart.selectData(generateId,cart_id)
    response.then(()=>{
        res.json(generateId)
    }).catch((err)=>{
        res.send(err)
    });
})

// shoppingCart.post('/products/:product_id/reviews',(req,res)=>{
//     var product_id=req.params.product_id
//     var productReviews = {
//         customer_id:req.body.customer_id,
//         product_id:product_id, 
//         review:req.body.review, 
//         rating:req.body.rating,
//         created_on:req.body.created_on
//     }

//     let response = getshoppingCart.reviews(productReviews)
//     response.then((result)=>{
//         return res.json(result);
//     }).catch((err)=>{
//         res.send(err)
//     });
// });

module.exports=shoppingCart