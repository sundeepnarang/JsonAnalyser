var express = require('express');
var router = express.Router();
var parse = require('../library/parser')
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.post('/parse',function(req,res){
    var JSON = JSON.parse(req.body.data);
    var parsedJSON = parse(req.body.key,JSON,'    ','    ');
    res.send(parsedJSON);
});
module.exports = router;
