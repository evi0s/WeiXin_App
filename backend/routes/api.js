var express = require('express');
var router = express.Router();

router.post('/passport/reg', function(req, res, next) {
  var username = req.body.username,
      passwd = req.body.passwd,
      email = req.body.email;

  var respoJson = {
    "code" : 1,
    "message" : "success"
  };
  res.jsonp(respoJson);
});

router.post('/passport/login', function(req, res, next) {
  var username = req.body.username,
      passwd = req.body.passwd;

  var respoJson = {
    "code" : 1,
    "message" : "success"
  };
  res.jsonp(respoJson);
});

router.get('/problemlist', function(req, res, next) {
  var respoJson = {
    "id" : [1,5],
    "brief" : [
      {
        "author" : "admin" ,
        "tag" : ["微积分","不定积分"] ,
        "title" : "求 ∫ sin x dx"
      },
      {
        "author" : "admin" ,
        "tag" : ["思修哲学"],
        "title" : "马克思主义哲学首要的和基本的观点是？"
      },
      {
        "author" : "admin" ,
        "tag" : ["数据结构","树"],
        "title" : "写出一棵简单的线段树"
      },
      {
        "author" : "admin" ,
        "tag" : ["算法","串匹配"],
        "title" : "写出KMP算法并说明next数组的作用"
      },
      {
        "author" : "admin" ,
        "tag" : ["大学物理","静电学"],
        "title" : "求电荷密度为𝜎的无穷大平面周围电势分布"
      }
    ]
  };
  res.jsonp(respoJson);
});

router.get('/problem/:id', function(req, res, next) {
  var respoJson = {

  };
  res.jsonp(respoJson);
});

router.get('/answer/:id', function(req, res, next) {
  var respoJson = {

  };
  res.jsonp(respoJson);
});

module.exports = router;
