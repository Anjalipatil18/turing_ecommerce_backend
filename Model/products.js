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

// let getDatabyname = (limit,name,description_length)=>{
//     return knex.from("product").limit(limit).where("name",name).where(('description', 'like', description_length))
// }

let getDatabyname = (description_length,limit)=>{
    return knex.from("product").string('description',[description_length])
}

let selectDataById=(product_id)=>{
    return knex.select("*").from("product").where("product_id",product_id)
}

module.exports={selectData,getDatabyname,selectDataById}

// table.string(name, [length])