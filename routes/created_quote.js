var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET users listing. */
router.get('/', function(req, res, next) {
  db('created_quote_table').then(created_quote_table =>{
    res.render('created/index', {created_quote_table})
  })
});

module.exports = router;
