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
    var that = this;
    WxSearch.init(
      that,  // 本页面一个引用
      [], // 热点搜索推荐，[]表示不使用
      [],// 搜索匹配，[]表示不使用
      that.mySearchFunction, // 提供一个搜索回调函数
      that.myGobackFunction //提供一个返回回调函数
    );
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
          id: 1,
          img: "../../images/index/articles/4.jpg",
          title: "四六级/托福雅思 实用资料",
          author: "wjj",
          time: "2018年5月10日"
        },
        {
          id: 2,
          img : "../../images/index/articles/1.jpg",
          title : "Docker入门",
          author: "admin",
          time : "2018年5月10日"
        },
        {
          id: 3,
          img: "../../images/index/articles/2.jpg",
          title: "区块链入门",
          author: "admin",
          time: "2018年5月10日"
        },
        {
          id: 4,
          img: "../../images/index/articles/3.jpg",
          title: "微积分常用公式整理",
          author: "hwfhc",
          time: "2018年5月10日"
        },
        {
          id: 5,
          img: "../../images/index/articles/5.jpg",
          title: "微积分常用公式整理",
          author: "hwfhc",
          time: "2018年5月10日"
        },
        {
          id: 6,
          img: "../../images/index/articles/6.jpg",
          title: "微积分常用公式整理",
          author: "hwfhc",
          time: "2018年5月10日"
        },
        {
          id: 7,
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

  },
  wxSearchInput: WxSearch.wxSearchInput,  // 输入变化时的操作
  wxSearchKeyTap: WxSearch.wxSearchKeyTap,  // 点击提示或者关键字、历史记录时的操作
  wxSearchDeleteAll: WxSearch.wxSearchDeleteAll, // 删除所有的历史记录
  wxSearchConfirm: WxSearch.wxSearchConfirm,  // 搜索函数
  wxSearchClear: WxSearch.wxSearchClear,  // 清空函数
})
