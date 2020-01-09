const express = require('express')
const orders = express.Router()
orders.use(express.json())
const getOrders = require("../Model/orders")

orders.post('/orders',(req,res)=>{
    let cart_id=req.body.cart_id;
    let insertData=getOrders.joinData(cart_id)
    insertData.then((data)=>{
        let totalAmount=data[0]['price']*data[0]['quantity']
        var ordersDetails = {
            status:req.body.status, 
            total_amount:totalAmount,
            comments:req.body.comments, 
            customer_id:req.body.customer_id,
            auth_code:req.body.auth_code,
            reference:req.body.reference,
            shipping_id:req.body.shipping_id,
            tax_id:req.body.tax_id,
            created_on:new Date(),
            shipped_on:new Date()
        }
        let response = getOrders.insertInOrders(ordersDetails)
        response.then((result)=>{
            return res.json(ordersDetails);
        })
        .catch((err)=>{
            res.send(err)
        });
    })
});

orders.get('/orders/:orders_id',(req,res)=>{
    
});

orders.get('/orders/shortDetail/:order_id',(req,res)=>{
    let order_id = req.params.order_id
    let response = getOrders.orderDataById(order_id)
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})


module.exports=orders