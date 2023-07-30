var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res, next) {
  res.redirect('/catalog');
  next();
});
router.get('/catalog', function (req, res) {
  res.render('index', { title: 'Local Library Home' });
});

module.exports = router;
