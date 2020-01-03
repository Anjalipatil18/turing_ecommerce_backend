const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Anjali2018@',
        database: 'Turing'
    }
}

const knex = require('knex')(options);

let selectData = ()=>{
    return knex.select("*").from("product")
}

let getDatabyname = (name)=>{
    return knex.from("product").where("name",name)
}

module.exports={selectData,getDatabyname}