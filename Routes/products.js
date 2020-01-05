const express = require('express')
const products = express.Router()
products.use(express.json())
const getcategories = require("../Model/products")

products.get('/products',(req,res)=>{
    let response = getcategories.selectData()
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

// products.get('/products/search/:limit/:name/:description_length',(req,res)=>{
//     var name=req.params.name;
//     var limit=req.params.limit;
//     var description_length = req.params.description_length;
//     let response = getcategories.getDatabyname(limit,name,description_length)
//     response.then((result)=>{
//         res.json(result)
//     }).catch((err)=>{
//         res.send(err)
//     });
// })

products.get('/products/search/:limit',(req,res)=>{
    // var name=req.params.name;
    var limit=req.params.limit;
    var description_length = req.params.description_length;
    let response = getcategories.getDatabyname(description_length,limit)
    response.then((result)=>{
        console.log(result)
        // for (let i=0; i<result.length; i++){
        //     // console.log(result[i])
        //     if(description_length==result[i]){
        //         // console.log(result[i])
        //         res.json(result[i])
        //     }
        // }
    }).catch((err)=>{
        res.send(err)
    });
})


products.get('/products/:products_id',(req,res)=>{
    var products_id=req.params.products_id
    let response = getcategories.selectDataById(products_id)
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

module.exports=products