const express = require('express')
const router = express.Router()
const knex = require('../db')


router.get('/', function(req, res, next) {
  console.log('params', req.query);
  knex('comments')
  .where('quote_table_id', req.query.quote_table_id)
  .then(comments => res.json(comments))
  .catch(err => {
    console.log(err);
    next(err)
  })
});

//  http://localhost:3000/comments?quote_table_id=2

module.exports = router
