exports.seed = (knex) => {
  return knex('comments').del()
    .then(() => {
      return knex('comments').insert([
        {
          id: 1,
          quotes_id: 2,
          content: 'First comment'
        },
        {
          id: 2,
          quotes_id: 2,
          content: 'This is a comment'
        },
      ])
    }).then(() => {
      return knex.raw(
        "SELECT setval('comments_seq', (SELECT MAX(id) FROM comments));"
      )
    })
}
