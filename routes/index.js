var express = require('express');
var router = express.Router();
var parse = require('../library/parser');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.post('/parse',function(req,res){
    var key = req.body.key;
    if(typeof(key)!="string"){
        key = '';
    }
    try{
        var data = JSON.parse(req.body.body);
        var parsedJSON = parse.parse(key,data,'    ','    ');
        parse.output = '';
        res.send(parsedJSON);
    }catch(e) {
        res.send('Invalid Json');
    }

});
module.exports = router;
