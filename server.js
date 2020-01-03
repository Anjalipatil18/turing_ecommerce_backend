const express = require('express');
const app = express();
app.use(express.json())
const knex = require("./Model/knex.js")
// const category = require("./Model/categories")

const department = require('./Routes/department')
app.use("/departments",department);

const categories = require('./Routes/categories ')
app.use("/categories",categories)

app.listen(2000,()=>{
    console.log("server is listening 2000.........")
});
