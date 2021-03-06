
exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorite_quote_table', (table) =>{
    table.increments();
    table.integer('users_id').notNullable();
    table.integer('quotes_id').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favorite_quote_table')
};
