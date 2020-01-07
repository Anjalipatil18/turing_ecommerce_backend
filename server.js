const express = require('express');
const app = express();
app.use(express.json())
const knex = require("./Model/department.js")
const category = require("./Model/categories")
const attribute = require("./Model/attribute")

const department = require('./Routes/department')
app.use("/",department);

const categories = require('./Routes/categories ')
app.use("/",categories)

const attributes = require('./Routes/attribute')
app.use("/",attributes)

const products = require('./Routes/products')
app.use("/",products)

const customers = require('./Routes/customer')
app.use("/",customers)

const tax = require('./Routes/tax')
app.use("/",tax)

const shipping = require('./Routes/shipping')
app.use("/",shipping)

app.listen(2000,()=>{
    console.log("server is listening 2000.........")
});
