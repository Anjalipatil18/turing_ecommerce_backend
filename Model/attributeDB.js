const knex=require('./knex')

let selectData = ()=>{
    return knex.select("*").from("attribute")
}

let selectDataById=(id)=>{
    return knex.select("*").from("attribute").where("attribute_id",id)
}

let innerJoinData=(attribute_id)=>{
    return knex.select('attribute_value.attribute_value_id','attribute_value.value').from('attribute').innerJoin('attribute_value').where('attribute.attribute_id',attribute_id)
}

let multipleTable=(product_id)=>{
    return knex.select('attribute_value.attribute_value_id','attribute_value.value','attribute.name').from('product_attribute').innerJoin('attribute_value').innerJoin('attribute').where('product_id',product_id)
}

module.exports={selectData,selectDataById,innerJoinData,multipleTable}