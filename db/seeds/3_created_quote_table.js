exports.seed = (knex) => {
  return knex('created_quote_table').del()
    .then(() => {
      return knex('created_quote_table').insert([
        {
          id: 1,
          users_id: 1,
          quotes_id: 1
        }
      ])
    }).then(() => {
      return knex.raw(
        "SELECT setval('created_quote_table_id_seq', (SELECT MAX(id) FROM created_quote_table));"
      )
    })
}
