exports.up = function(knex, Promise) {
  return knex.schema.createTable('quote_table', (table) =>{
    table.increments();
    table.integer('categories_id').index().references('id').inTable('categories').onDelete('restrict').notNullable();
    table.varchar('caption').notNullable();
    table.text('author').notNullable();
    table.integer('popularity').notNullable();
    table.text('background').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('quote_table')
};
