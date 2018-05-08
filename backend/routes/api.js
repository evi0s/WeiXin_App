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
  var id = req.params['id']
  var respoJson;
  switch(id){
    case "1" : respoJson = {
      "author" : "admin" ,
      "tag" : ["微积分","不定积分"] ,
      "title" : "求 ∫ sin x dx" ,
      "detail" : "null",
      "img" : "null",
      "totoal_socre" : 10,
      "score" : 10
    }; break;
    case "2" : respoJson = {
      "author" : "admin" ,
      "tag" : ["思修哲学"],
      "title" : "马克思主义哲学首要的和基本的观点是？",
      "detail" : "A.物质的观点 B.运动的观点 C.实践的观点 D.发展的观点",
      "img" : "null",
      "totoal_socre" : 5,
      "score" : 0
    }; break;
    case "3" : respoJson = {
      "author" : "admin" ,
      "tag" : ["数据结构","树"],
      "title" : "写出一棵简单的线段树",
      "detail" : "要求实现建立，查询，修改，求和操作",
      "img" : "null",
      "totoal_socre" : 20,
      "score" : 15
    }; break;
    case "4" : respoJson = {
      "author" : "admin" ,
      "tag" : ["算法","串匹配"],
      "title" : "写出KMP算法并说明next数组的作用",
      "detail" : "null",
      "img" : "null",
      "totoal_socre" : 20,
      "score" : 10
    }; break;
    case "5" : respoJson = {
      "author" : "admin" ,
      "tag" : ["大学物理","静电学"],
      "title" : "求电荷密度为𝜎的无穷大平面周围电势分布",
      "detail" : "null",
      "img" : "https://demo.lrworkshop.xin/examplehash",
      "totoal_socre" : 20,
      "score" : 0
    }; break;

  }
  res.jsonp(respoJson);
});

router.get('/answer/:id', function(req, res, next) {
  var respoJson = {

  };
  res.jsonp(respoJson);
});

module.exports = router;
