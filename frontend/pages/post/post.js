// pages/post/post.js
var WxSearch = require('../../wxSearchView/wxSearchView.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    posts: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    WxSearch.init(
      that,  // 本页面一个引用
      [], // 热点搜索推荐，[]表示不使用
      [],// 搜索匹配，[]表示不使用
      that.mySearchFunction, // 提供一个搜索回调函数
      that.myGobackFunction //提供一个返回回调函数
    );

    this.setData({
      posts: [
        {
          "post_id": 10001,
          "tag": "大学物理",
          "title": "点荷密度为𝜎的无穷大平面周围电势分布怎么求啊",
          "time": 1525921702,
          "author": "admin",
          "reply": 0
        },
        {
          "post_id": 10002,
          "tag": "微积分",
          "title": "这个定积分怎么求",
          "time": 1525921703,
          "author": "admin",
          "reply": 2
        },
        {
          "post_id": 10003,
          "tag": "思修",
          "title": "马克思主义哲学首要的和基本的观点是啥",
          "time": 1525921704,
          "author": "admin",
          "reply": 10
        },
        {
          "post_id": 10004,
          "tag": "算法",
          "title": "求解释KMP算法",
          "time": 1525921705,
          "author": "ruoji",
          "reply": 100
        },
        {
          "post_id": 10005,
          "tag": "数据结构",
          "title": "线段树求救",
          "time": 1525921706,
          "author": "ruoji",
          "reply": 30
        },
        {
          "post_id": 10006,
          "tag": "大学物理",
          "title": "大雾真心学不来啊",
          "time": 1525921707,
          "author": "ruoji",
          "reply": 100
        }
      ]
    })

  },

  wxSearchInput: WxSearch.wxSearchInput,  // 输入变化时的操作
  wxSearchKeyTap: WxSearch.wxSearchKeyTap,  // 点击提示或者关键字、历史记录时的操作
  wxSearchDeleteAll: WxSearch.wxSearchDeleteAll, // 删除所有的历史记录
  wxSearchConfirm: WxSearch.wxSearchConfirm,  // 搜索函数
  wxSearchClear: WxSearch.wxSearchClear,  // 清空函数
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})