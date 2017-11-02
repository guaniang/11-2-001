var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createPool({
  host:"localhost",
  user:"root",//administrator
  password:"123456"
})
/* GET home page. */
router.post('/list', function(req, res, next) {
connection.query("SELECT * FROM test.title",function(err,rows,fields){
    res.header('Access-Control-Allow-Origin',"*")
    res.send(rows)
})
});

router.post('/zhen', function(req, res, next){
	res.header("Access-Control-Allow-Origin","*")
  var name=req.body.name;
  var sj=req.body.sj;
  var aa=req.body.title;
connection.query('INSERT INTO test.title (name,tit,sj) VALUES ("'+name+'","'+aa+'","'+sj+'")',function(err,rows){
    res.send(rows)
})
});

module.exports = router;
