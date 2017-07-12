exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table => {
    table.increments()
    table.text("content")
    table.integer("quote_table_id").index().references("id").inTable("quote_table").onDelete("cascade").notNullable()
    table.integer("users_id").index().references("id").inTable("users").onDelete("cascade").notNullable()
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
}
