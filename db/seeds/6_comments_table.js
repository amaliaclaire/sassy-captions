exports.seed = (knex) => {
  return knex('comments').del()
    .then(() => {
      return knex('comments').insert([
        {
          id: 1,
          quote_table_id: 2,
          users_id: 1,
          content: 'First comment'
        },
        {
          id: 2,
          quote_table_id: 2,
          users_id: 1,
          content: 'This is a comment'
        },
      ])
    }).then(() => {
      return knex.raw(
        "SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments));"
      )
    })
}
