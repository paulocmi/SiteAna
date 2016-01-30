var express = require('express');
var router = express.Router();

// Render the home page.
router.get('/', function(req, res) {
  res.render('index', { title: 'Home', user: req.user });
});

module.exports = router;
