exports.seed = (knex) => {
  return knex('quote_table').del()
    .then(() => {
      return knex('quote_table').insert([
        {
          id: 1,
          caption: "real queens fix each other's crowns",
          category: "friendship",
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 2,
          caption: "stay real, stay loyal, or stay away from me",
          category: "friendship",
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 3,
          caption: "keep the ones that heard you when you never said a word",
          category: "friendship",
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 4,
          caption: "I thank you for your part in my journey",
          category: "friendship",
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 5,
          caption: "You're my favorite bitch to bitch about bitches with",
          category: "friendship",
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 6,
          caption: "family. Where life begins. And love never ends",
          category: "family",
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 7,
          caption: "Family isn't an important thing. It's everything",
          category: "family",
          author: "Michael J. Fox",
          popularity: 1,
          background:'white'
        },
        {
          id: 8,
          caption: "The love of a family is life's greatest blessing",
          category: "family",
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 9,
          caption: "Never sacrifice these three things: your family, your heart, or your dignity",
          category: "family",
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 10,
          caption: "Never sacrifice these three things: your family, your heart, or your dignity",
          category: "family",
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 11,
          caption: "The testing of your faith produces perseverance",
          category: "faith",
          author: "James 1:3",
          popularity: 1,
          background:'white'
        },
        {
          id: 12,
          caption: "To trust God in the light is nothing, but trust him in the dark - that is faith",
          category: "faith",
          author: "C.H. Spurgeon",
          popularity: 1,
          background:'white'
        },
        {
          id: 13,
          caption:  "Where God guides, he provides",
          category: "faith",
          author: "Isaiah 58:11",
          popularity: 1,
          background:'white'
        },
        {
          id: 14,
          caption:  "He heals the wounds of every shattered heart",
          category: "faith",
          author: "Palsm 14:73",
          popularity: 1,
          background:'white'
        },
        {
          id: 15,
          caption: "Tears are prayers too. They travel to God when we can't speak.",
          category: "faith",
          author: "Palsm 56:8",
          popularity: 1,
          background:'white'
        },
        {
          id: 16,
          caption: "You want to be at my level? Climb Bitch",
          category: "fun",
          author: "Full Ten",
          popularity: 1,
          background:'white'
        },
        {
          id: 17,
          caption: "Alpha females don't run in packs",
          category: "fun",
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 18,
          caption: "thick thighs & pretty eyes",
          category: "fun",
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 19,
          caption: "I never chase, I replace. Remember that",
          category: "fun",
          author: "anonymous",
          popularity: 1,
          background:'white'
        },
        {
          id: 20,
          caption: "5'3 but my attitude 6'2.",
          category: "fun",
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
