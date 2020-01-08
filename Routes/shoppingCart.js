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

shoppingCart.post('/shoppingCart/add',(req,res)=>{
    var shoppingCartDetails = {
        cart_id:req.body.cart_id,
        product_id:req.body.product_id, 
        attributes:req.body.attributes, 
        quantity:req.body.quantity,
        added_on:new Date()
    }

    let response = getshoppingCart.selectDataById(shoppingCartDetails)
    response.then((result)=>{
        return res.json(result);
    }).catch((err)=>{
        res.send(err)
    });
});

module.exports=shoppingCart