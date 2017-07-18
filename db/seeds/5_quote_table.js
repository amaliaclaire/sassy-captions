exports.seed = (knex) => {
  return knex('quote_table').del()
    .then(() => {
      return knex('quote_table').insert([
        {
          id: 1,
          caption: "real queens fix each other's crowns",
          categories_id: 2,
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 2,
          caption: "stay real, stay loyal, or stay away from me",
          categories_id: 2,
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 3,
          caption: "keep the ones that heard you when you never said a word",
          categories_id: 2,
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 4,
          caption: "I thank you for your part in my journey",
          categories_id: 2,
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 5,
          categories_id: 2,
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 6,
          caption: "family. Where life begins. And love never ends",
          categories_id: 1,
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 7,
          caption: "Family isn't an important thing. It's everything",
          categories_id: 1,
          author: "Michael J. Fox",
          popularity: 1,
          background:'white'
        },
        {
          id: 8,
          caption: "The love of a family is life's greatest blessing",
          categories_id: 1,
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 9,
          caption: "Never sacrifice these three things: your family, your heart, or your dignity",
          categories_id: 1,
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 10,
          caption: "Never sacrifice these three things: your family, your heart, or your dignity",
          categories_id: 1,
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 11,
          caption: "The testing of your faith produces perseverance",
          categories_id: 3,
          author: "James 1:3",
          popularity: 1,
          background:'white'
        },
        {
          id: 12,
          caption: "To trust God in the light is nothing, but trust him in the dark - that is faith",
          categories_id: 3,
          author: "C.H. Spurgeon",
          popularity: 1,
          background:'white'
        },
        {
          id: 13,
          caption:  "Where God guides, he provides",
          categories_id: 3,
          author: "Isaiah 58:11",
          popularity: 1,
          background:'white'
        },
        {
          id: 14,
          caption:  "He heals the wounds of every shattered heart",
          categories_id: 3,
          author: "Palsm 14:73",
          popularity: 1,
          background:'white'
        },
        {
          id: 15,
          caption: "Tears are prayers too. They travel to God when we can't speak.",
          categories_id: 3,
          author: "Palsm 56:8",
          popularity: 1,
          background:'white'
        },
        {
          id: 16,
          caption: "You want to be at my level? Climb Bitch",
          categories_id: 4,
          author: "Full Ten",
          popularity: 1,
          background:'white'
        },
        {
          id: 17,
          caption: "Alpha females don't run in packs",
          categories_id: 4,
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 18,
          caption: "thick thighs & pretty eyes",
          categories_id: 4,
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 19,
          caption: "I never chase, I replace. Remember that",
          categories_id: 4,
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 20,
          caption: "5'3 but my attitude 6'2.",
          categories_id: 4,
          author: "anonymous",
          popularity: 1,
          background:'white'
        }
      ])
    }).then(() => {
      return knex.raw(
        "SELECT setval('quote_table_id_seq', (SELECT MAX(id) FROM quote_table));"
      )
    })
}
