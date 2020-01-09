const express = require('express')
const customer = express.Router()
customer.use(express.json())
const getOrders = require("../Model/orders")



getOrders.post('/orders',(req,res)=>{
    var ordersDetails = {
        order_id:req.body.order_id,
        total_amount:req.body.total_amount,
        status:req.body.status, 
        comments:req.body.comments, 
        customer_id:req.body.customer_id,
        auth_code:req.body.auth_code,
        reference:req.body.reference,
        shipping_id:req.body.shipping_id,
        tax_id:req.body.tax_id,
        created_on:new Date(),
        shipped_on:new Date()
    }

    let response = getshoppingCart.selectDataById(ordersDetails)
    response.then((result)=>{
        return res.json(result);
    }).catch((err)=>{
        res.send(err)
    });
});

module.export=getOrders