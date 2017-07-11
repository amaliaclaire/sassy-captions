const express = require('express')
const router = express.Router()
const knex = require('../db')

router.get('/:quote_table_id/comments', (req, res, next) => {
  knex('comments')
    .where({quote_table_id: req.params.quote_table_id})
    .then(comments => res.json(comments))
    .catch(err => next(err))
})

router.post('/:quote_table_id/comments', validate, (req, res, next) => {
  knex('comments')
    .insert({content: req.body.content, quote_table_id: req.params.quote_table_id})
    .where({quote_table_id: req.params.quote_table_id})
    .returning('*')
    .then(comments => res.json(comments[0]))
    .catch(err => next(err))
})

router.patch('/:quote_table_id/comments/:id', validate, (req, res, next) => {
  knex('comments')
    .update({content: req.body.content})
    .where({quote_table_id: req.params.quote_table_id, id: req.params.id})
    .returning('*')
    .then(comments => res.json(comments[0]))
    .catch(err => next(err))
})

router.delete('/:quote_table_id/comments/:id', (req, res, next) => {
  knex('comments')
    .del()
    .where({quote_table_id: req.params.quote_table_id, id: req.params.id})
    .then(() => res.end())
    .catch(err => next(err))
})

function validate(req, res, next) {
  const errors = [];
  ['content'].forEach(field => {
    if (!req.body[field] || req.body[field].trim() === '') {
      errors.push({field, messages: ["cannot be blank"]})
    }
  })
  if (errors.length) return res.status(422).json({errors})
  next()
}

module.exports = router
