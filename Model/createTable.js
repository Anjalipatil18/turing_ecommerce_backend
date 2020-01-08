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

knex.schema.createTable('saveForLater', (table) => {
    table.increments('item_id')
    table.string('cart_id')
    table.integer('product_id')
    table.string('attributes')
    table.integer('quantity')
    table.integer('buy_now')
    table.dateTime('added_on')
})
    .then(() => {
        console.log("table created")
    })

.catch((err) => { console.log(err); throw err })
.finally(() => {
    knex.destroy();
});
