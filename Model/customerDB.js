const knex=require('./knex')

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

let putCreditCardCustomer=(updateCustomer,customer_id)=>{
    return knex('customer').update(updateCustomer).where("customer_id",customer_id)
}

module.exports={customer,selectData,putCustomer,login,putAddressCustomer,putCreditCardCustomer}