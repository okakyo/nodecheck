var express = require('express');
var axios=require('axios');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    _id: 1,
    status_code:"0000",
    message:"こんにち殺法"
  });
});

module.exports = router;
