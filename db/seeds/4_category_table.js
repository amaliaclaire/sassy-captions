exports.seed = (knex) => {
  return knex('categories').del()
    .then(() => {
      return knex('categories').insert([
        {
          id: 1,
          name: 'Family',
        },
        {
          id: 2,
          name: 'Friendship'
        },
        {
          id: 3,
          name: 'Faith'
        },
        {
          id: 4,
          name: 'Fun'
        },
      ])
    }).then(() => {
      return knex.raw(
        "SELECT setval('categories_id_seq', (SELECT MAX(id) FROM categories));"
      )
    })
}
