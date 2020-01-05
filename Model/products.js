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

let getDatabyname = (limit,name)=>{
    return knex.from("product").limit(limit).where("name",name)
}

let selectDataById=(product_id)=>{
    return knex.select("*").from("product").where("product_id",product_id)
}

let innerJoinData=(category_id)=>{
    return knex.select('product_id','product.name','price','product.description','discounted_price','thumbnail').from("product").innerJoin('category').where("category.category_id",category_id)
}

let JoinData=(department_id)=>{
    return knex.select('product_id','product.name','price','product.description','discounted_price','thumbnail').from("product").innerJoin('department_id').where("department.department_id",department_id)
}

module.exports={selectData,getDatabyname,selectDataById,innerJoinData,JoinData}

