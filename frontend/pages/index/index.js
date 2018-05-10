//index.js
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
          img: "../../images/index/nav/chinese.png",
          title: "语文",
          navigator: "../other/other"
        },
        {
          img: "../../images/index/nav/math.png",
          title: "数学",
          navigator: "../other/other"
        },
        {
          img: "../../images/index/nav/physics.png",
          title: "物理",
          navigator: "../other/other"
        },
        {
          img: "../../images/index/nav/computer.png",
          title: "计算机",
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
          img: "../../images/index/articles/4.jpg",
          title: "四六级/托福雅思 实用资料",
          author: "wjj",
          time: "2018年5月10日"
        },
        {
          img : "../../images/index/articles/1.jpg",
          title : "Docker入门",
          author: "admin",
          time : "2018年5月10日"
        },
        {
          img: "../../images/index/articles/2.jpg",
          title: "区块链入门",
          author: "admin",
          time: "2018年5月10日"
        },
        {
          img: "../../images/index/articles/3.jpg",
          title: "微积分常用公式整理",
          author: "hwfhc",
          time: "2018年5月10日"
        },
        {
          img: "../../images/index/articles/5.jpg",
          title: "微积分常用公式整理",
          author: "hwfhc",
          time: "2018年5月10日"
        },
        {
          img: "../../images/index/articles/6.jpg",
          title: "微积分常用公式整理",
          author: "hwfhc",
          time: "2018年5月10日"
        },
        {
          img: "../../images/index/articles/7.jpg",
          title: "微积分常用公式整理",
          author: "hwfhc",
          time: "2018年5月10日"
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
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
