exports.up = function(knex, Promise) {
  return knex.schema.createTable('created_quote_table', (table) =>{
    table.increments();
    table.integer('users_id').notNullable();
    table.integer('quotes_id').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('created_quote_table')
};
