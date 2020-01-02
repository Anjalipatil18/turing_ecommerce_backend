const express = require('express');
const app = express();
app.use(express.json())

// const knex = require('./Model/knex')

var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'Anjali2018@',
      database : 'Turing'
    }
})

console.log('database is connected now!');

app.get('/get', function(req, res){
    knex.select("*").from("department")
    .then((data)=>{
        // console.log(data)
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})

// const department = require('./Routes/department')
// app.use("/get",department);

app.listen(2000,()=>{
    console.log("server is listening 3000.........")
});
