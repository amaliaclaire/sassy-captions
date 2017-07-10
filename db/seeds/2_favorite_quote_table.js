
exports.seed = (knex) => {
  return knex('favorite_quote_table').del()
    .then(() => {
      return knex('favorite_quote_table').insert([
        {
          id: 1,
          user_id: 1,
          quote_id: 1
        }
      ])
    }).then(() => {
      return knex.raw(
        "SELECT setval('favorite_quote_table_id_seq', (SELECT MAX(id) FROM favorite_quote_table));"
      )
    })
}
