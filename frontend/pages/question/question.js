//question.js
//获取应用实例
const app = getApp()
var WxSearch = require('../../wxSearchView/wxSearchView.js');

Page({
  data: {
    background: [],
    swiper : [],
    nav : [],
    articles : [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {
    this.setData({
      nav : [
        {
          img: "../../images/question/nav/chinese.png",
          title: "语文",
          navigator: "../other/other"
        },
        {
          img: "../../images/question/nav/math.png",
          title: "数学",
          navigator: "../other/other"
        },
        {
          img: "../../images/question/nav/physics.png",
          title: "物理",
          navigator: "../other/other"
        },
        {
          img: "../../images/question/nav/computer.png",
          title: "计算机",
          navigator: "../other/other"
        },
        {
          img: "../../images/question/nav/bio.png",
          title: "生物",
          navigator: "../other/other"
        },
        {
          img: "../../images/question/nav/history.png",
          title: "历史",
          navigator: "../other/other"
        },
        {
          img: "../../images/question/nav/art.png",
          title: "美术",
          navigator: "../other/other"
        },
        {
          img: "../../images/question/nav/pe.png",
          title: "体育",
          navigator: "../other/other"
        }
      ],
      background : [
        {
          img: "../../images/index/swiper/1.jpg",
        },
        {
          img: "../../images/index/swiper/2.jpg",
        },
        {
          img: "../../images/index/swiper/3.jpg",
        }
      ],
      articles : [
        {
          "id" : 10001,
          "author": "admin",
          "tag": ["微积分", "不定积分"],
          "title": "求 ∫ sin x dx"
        },
        {
          "id" : 10002,
          "author": "admin",
          "tag": ["思修哲学"],
          "title": "马克思主义哲学首要的和基本的观点是？"
        },
        {
          "id" :10003,
          "author": "admin",
          "tag": ["数据结构", "树"],
          "title": "写出一棵简单的线段树"
        },
        {
          "id" : 10004,
          "author": "admin",
          "tag": ["算法", "串匹配"],
          "title": "写出KMP算法并说明next数组的作用"
        },
        {
          "id" : 10005,
          "author": "admin",
          "tag": ["大学物理", "静电学"],
          "title": "求电荷密度为𝜎的无穷大平面周围电势分布"
        }
      ]

    })
    
    
    /*wx.request({
      url: 'https://wcxp1314.lrworkshop.xin/api/get_hum_and_temp',
      data: {},
      method: 'GET',
      success: function (res) {
        console.log(res.data.temp);
        that.setData({
          temp: res.data.temp,
          hum: res.data.hum
        })
      }
    })*/
  },
})
