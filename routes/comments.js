const express = require('express')
const router = express.Router()
const knex = require('../db')


router.get(`/comments`, function(req, res, next) {
  console.log('params', req.query);
  knex('comments')
  .where('quote_table_id', req.query.id)
  .then(comments => res.json(comments))
  .catch(err => {
    console.log(err);
    next(err)
  })
});


// Make a post route for comments

router.post('/comments', (req, res, next) => {
  let createComment = {
    content: req.body.content
  }

  knex('comments').insert(createComment, '*').then(newComment => {
    res.json({newComment: newComment})
  })
  .catch(err => {
    debugger
    next(err)
  })
})
  // debugger
  // knex('comments')
  // .where({id: req.params.id})
  // .update({content: knex.raw('content')})
  // .returning('*')
  // .then(comments => {
  //   debugger
  //   console.log('hi charlie', comments);
  //   res.json({comments: comments})
  // })
  // .catch(err => {
  //   debugger
  //   next(err)
  // })

//  http://localhost:3000/comments?quote_table_id=2

module.exports = router
