var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
const MongoClient  = require('mongodb')
const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/submit', function (req, res) {
  console.log(req.body)
  MongoClient.connect(url), function (err, client) {
    if (err) {
      console.log('error')
    }   
    else {
      console.log('Connected yet')
    }
    res.send('got it')

  }
})
module.exports = router; 
