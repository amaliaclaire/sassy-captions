var express = require('express');
var router = express.Router();
var db = require('../db')



// Get Quote from views/quote

router.get('/', function(req, res, next){
  let quotes = []
  db('categories').innerJoin('quote_table', 'categories.id', 'quote_table.categories_id').orderBy('popularity', 'desc')
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

router.post('/', (req, res, next) => {
  console.log('/quotes')
  let categoryId = null;
  let category = req.body.category

  if(category === 'Family'){
    categoryId = 1;
  }else if (category === 'Friendship'){
    categoryId = 2;
  }else if (category === 'Faith'){
    categoryId = 3;
  } else if (category === 'Fun') {
    categoryId = 4;
  }

  let createNewQuote = {
    caption: req.body.caption,
    categories_id: categoryId,
    author: 'anonymous',
    popularity: 1,
    background: 'white',
  }

  db('quote_table').insert(createNewQuote).then(newQuote => {
    res.json({newQuote: newQuote})
  }).catch(err => {
    console.log('err', err);
    next(err)
  })
})

// Delete route for a single quote

router.delete('/:id', (req, res, next) => {
  let id = req.params.id

  db('quote_table').del().where({id}).then((deleted) => {
    res.json(deleted)
  }).catch(err => {
    console.log('err', err)
    next(err)
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
