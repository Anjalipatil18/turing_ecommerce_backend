const express = require('express')
const products = express.Router()
products.use(express.json())
const getProducts = require("../Model/products")

products.get('/products',(req,res)=>{
    let response = getProducts.selectData()
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

products.get('/products/search/:limit/:name/:description_length',(req,res)=>{
    var name=req.params.name;
    var limit=req.params.limit;
    var description_length = req.params.description_length;
    let response = getProducts.getDatabyname(limit,name)
    response.then((result)=>{
    var main=result[0]['description']
    main=main.slice(0, description_length);
    var main_data ={
        "product_id":result[0]['product_id'],
        "name":result[0]['name'],
        "description":main,
        "price": result[0]['price'],
        "discounted_price": result[0]['discounted_price'],
        "image": result[0]['image'],
        "image_2": result[0]['image_2'],
        "thumbnail": result[0]['thumbnail'],
        "display": result[0]['display']
    }
    res.json(main_data)
    }).catch((err)=>{
        res.send(err)
    });
})

products.get('/products/:products_id',(req,res)=>{
    var products_id=req.params.products_id
    let response = getProducts.selectDataById(products_id)
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

products.get('/products/inCategory/:category_id',(req,res)=>{
    var category_id=req.params.category_id
    let response = getProducts.innerJoinData(category_id)
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

products.get('/products/inDepartment/:department_id',(req,res)=>{
    var department_id=req.params.department_id
    let response = getProducts.innerJoinData(department_id)
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})


module.exports=products