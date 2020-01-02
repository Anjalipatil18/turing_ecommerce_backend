const express = require('express');
const app = express();
app.use(express.json())
const knex = require("./Model/knex.js")


app.get("/get",(req,res)=>{
    var data = knex.selectData()
    .then((data) => {
        res.send(data);
    }).catch((err)=>{
        res.send(err);
    })
})

app.listen(2000,()=>{
    console.log("server is listening 2000.........")
});
