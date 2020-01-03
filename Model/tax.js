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

let selectData = (user_data)=>{
    return knex.select("*").from("tax")
}

let selectDataById=(id)=>{
    return knex.select("*").from("tax").where("tax_id",id)
}


module.exports={selectData,selectDataById}