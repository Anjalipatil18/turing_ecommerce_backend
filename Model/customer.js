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

let putCustomer = (updateCustomerDetails,customer_id)=>{
    return knex('customer').update(updateCustomerDetails).where("customer_id",customer_id)
}
let login = ()=>{
    return knex.select('*').from('customer')
}

let putAddressCustomer=(updateCustomerAddressDetails,customer_id)=>{
    return knex('customer').update(updateCustomerAddressDetails).where("customer_id",customer_id)
}

module.exports={customer,selectData,putCustomer,login,putAddressCustomer}