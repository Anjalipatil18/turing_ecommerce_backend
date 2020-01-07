const express = require('express')
const customer = express.Router()
customer.use(express.json())
const getcustomer = require("../Model/customer")
const jwt = require('jsonwebtoken')

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

customer.put('/customers',(req,res)=>{
    let customer_id=req.body.customer_id;
    let updateCutomerDetails={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        day_phone:req.body.day_phone,
        eve_phone:req.body.eve_phone,
        mob_phone:req.body.mob_phone
    }
    let response = getcustomer.putCustomer(updateCutomerDetails,customer_id)
    response.then((result)=>{
        res.json("table updated!...")
    }).catch((err)=>{
        res.send(err)
    });
})

customer.post('/customers/login',(req,res)=>{
        let email=req.body.email 
        let password=req.body.password 
        let response = getcustomer.login()
        response.then((result)=>{
            for(let i=0; i<result.length; i++){
                if((result[i]["email"]==email) && (result[i]["password"]==password)){
                    let token=jwt.sign({"user":result},'Anjali')
                    res.cookie(token)
                    res.send("It's correct!")
                }
            }
        })  
});

customer.put('/customers/address',(req,res)=>{  
    let data = req.headers.cookie
    let splitToken=data.split("=undefined; ")
    let alltoken = splitToken[splitToken.length -2]
    jwt.verify(alltoken, 'Anjali', (err,data) => {
        res.send(data)
        let updateCutomerDetails={
            address_1:req.body.address_1,
            address_2:req.body.address_2,
            customer_id:req.body.customer_id,
            city:req.body.city,
            region:req.body.region,
            postal_code:req.body.postal_code,
            country:req.body.country,
            shipping_region_id:req.body.shipping_region_id
        }
        let response = getcustomer.putAddressCustomer(updateCutomerDetails,customer_id)
        response.then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.send(err)
        });
    })
})

customer.put('/customers/creditCard',(req,res)=>{  
    let customer_id=req.body.customer_id
    let data = req.headers.cookie
    let splitToken=data.split("=undefined; ")
    let alltoken = splitToken[splitToken.length -2]
    jwt.verify(alltoken, 'Anjali', (err,data) => {
        let updateCutomerDetails={
            credit_card:req.body.credit_card
        }
        let response = getcustomer.putCreditCardCustomer(updateCutomerDetails,customer_id)
        response.then((result)=>{
            res.json(result)
        }).catch((err)=>{
            res.send(err)
        });
    })
})



module.exports=customer