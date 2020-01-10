const knex=require('./knex')

let selectData = (user_data)=>{
    return knex.select("*").from("category")
}

let selectDataById=(id)=>{
    return knex.select("*").from("category").where("category_id",id)
}

let innerJoinData=(product_id)=>{
    return knex.select('name','department_id','category.category_id').from('category').innerJoin('product_category').where("product_id",product_id)
}

let joinTable=(department_id)=>{
    return knex.select('name','department_id','category.description','category.category_id').from('category').innerJoin('product_category').where("department_id",department_id)
}

module.exports={selectData,selectDataById,innerJoinData,joinTable}