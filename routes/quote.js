var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET quote */
// router.get('/', function(req, res, next) {
//   res.send('all quotes render here');
// });

// Get Quote from views/quote

router.get('/', function(req, res, next){
  let quotes = []
  db('quote_table')
  .then(quote_table => {
    quotes = quote_table
    return Promise.all(quote_table.map((quote) => {
      return db('comments').where('quote_table_id', quote.id)
    }))
  })
  .then((commentsArr) => {
    for (var i = 0; i < quotes.length; i++) {
      quotes[i].comments = commentsArr[i]
    }

    res.json(quotes)
  })
})

// Upvote and downVote

router.post('/:id/votes', (req, res, next) => {
  db('quote_table')
    .where({id: req.params.id})
    .update({popularity: db.raw('popularity + 1')})
    .returning('*')
    .then(quote =>{
      res.send(quote)
    })
    .catch(err => next(err))
})

router.delete('/:id/votes', (req, res, next) => {
  db('quote_table')
  
    .where({id: req.params.id})
    .update({popularity: db.raw('popularity - 1')})
    .returning('*')
    .then(quote => {
      res.send(quote)
    })
    .catch(err => next(err))
})








module.exports = router;
