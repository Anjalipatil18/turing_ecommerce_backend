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

let customer = (customerDetails)=>{
    return knex('customer').insert(customerDetails)
}

let selectData = ()=>{
    return knex.select("*").from("customer")
}

let putCustomer = (updateCustomerDetails)=>{
    return knex('customer').update(updateCustomerDetails)
}


module.exports={customer,selectData,putCustomer}