var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/registro', function(req, res) {
    res.render('registro');
});

router.get('/login', function(req, res) {
    res.render('login');
})

module.exports = router;