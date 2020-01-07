const express = require('express')
const customer = express.Router()
customer.use(express.json())
const getcustomer = require("../Model/customer")

customer.post('/customers',(req,res)=>{
    var customerDetails = {
        name:req.body.name,
        email:req.body.email, 
        password:req.body.password, 
        credit_card:req.body.credit_card,
        address_1:req.body.address_1,
        address_2:req.body.address_2,
        city:req.body.city,
        region:req.body.region,
        postal_code:req.body.postal_code,
        country:req.body.country,
        shipping_region_id:req.body.shipping_region_id,
        day_phone:req.body.day_phone,
        eve_phone:req.body.eve_phone,
        mob_phone:req.body.mob_phone
    }
    let response = getcustomer.customer(customerDetails)
    response.then((result)=>{
        return res.json(result);
    }).catch((err)=>{
        res.send(err)
    });
});

customer.get('/customers',(req,res)=>{
    let response = getcustomer.selectData()
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

customer.put('/customer',(req,res)=>{
    
    let response = getcustomer.selectData()
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

module.exports=customer