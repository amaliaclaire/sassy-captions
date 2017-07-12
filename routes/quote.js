var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET quote */
// router.get('/', function(req, res, next) {
//   res.send('all quotes render here');
// });

// Get Quote from views/quote

router.get('/', function(req, res, next){
  db('quote_table').then(quote_table => {
    res.render('quote/index', {quote_table});
  })
})





module.exports = router;
