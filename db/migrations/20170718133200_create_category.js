exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', table => {
    table.increments()
    table.text('name').notNullable(); 
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories')
}
