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