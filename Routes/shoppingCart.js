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

shoppingCart.get('/shoppingCart/:cart_id',(req,res)=>{
    let cart_id = req.params.cart_id
    let response = getshoppingCart.shoppingCartByCartId(cart_id)
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

shoppingCart.put('/shoppingCart/update/:item_id',(req,res)=>{
    let item_id=req.params.item_id;
    let response = getshoppingCart.updateShoppingCartByItemId(item_id)
    response.then((result)=>{
        let updateShoppingCart={
        item_id : result[0]['item_id'],
        attributes : result[0]['attributes'],
        quantity : result[0]['quantity'],
        product_id : result[0]['product_id'],
        price : result[0]['price'],
        name : result[0]['name'],
        subtotal : result[0]['price']*result[0]['quantity']
        }
        res.json(updateShoppingCart)
    }).catch((err)=>{
        res.send(err)
    });
})

shoppingCart.delete('/shoppingCart/empty/:cart_id',(req,res)=>{
    let cart_id=req.params.cart_id;
    let response = getshoppingCart.deleteByItemId(cart_id)
    response.then((result)=>{
        res.send("delete data!")
    }).catch((err)=>{
        res.send(err)
    })
})

shoppingCart.get('/shoppingCart/totalAmount/:cart_id',(req,res)=>{
    let cart_id=req.params.cart_id;
    let response = getshoppingCart.getShoppingCartByCartId(cart_id)
    response.then((result)=>{
        let getShoppingCart={
            total_amount : result[0]['price']*result[0]['quantity']
            }
            res.json(getShoppingCart)
    }).catch((err)=>{
        res.send(err)
    })    

})

shoppingCart.get('/shoppingCart/saveForLater/:item_id',(req,res)=>{
    let item_id=req.params.item_id;
    let response=getshoppingCart.selectsaveForLater(item_id);
    response.then((data)=>{
    let inserting=getshoppingCart.insertDatasaveforlater(data);
    inserting.then((data)=>{
        console.log("data inserted...")
    let deleteData=getshoppingCart.deleteByItemId(item_id)
    deleteData.then((result)=>{
        res.send("data deleted..");
    }).catch((err)=>{
        res.send(err);
    });
})
})
})

shoppingCart.get('/shoppingCart/getSaved/:cart_id',(req,res)=>{
    let cart_id=req.params.cart_id;
    let response = getshoppingCart.getSavedShoppingCart(cart_id)
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    })    
})

shoppingCart.delete('/shoppingCart/empty/:cart_id',(req,res)=>{
    let cart_id=req.params.cart_id;
    let response = getshoppingCart.deleteByItemId(cart_id)
    response.then((result)=>{
        res.send("delete data!")
    }).catch((err)=>{
        res.send(err)
    })
})

module.exports=shoppingCart