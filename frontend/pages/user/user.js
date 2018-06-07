const App = getApp()

Page({
	data: {
		userInfo: {}
	},
	onLoad() {
		this.getUserInfo()
	},
	onShow() {

	},
  getUserInfo() {
    const userInfo = App.globalData.userInfo

	  if (userInfo) {
	  	this.setData({
		  	userInfo: userInfo
		  })
    
	  return
	}
	wx.getUserInfo()
		.then(data => {
			console.log(data)
			this.setData({
				userInfo: data
			})
		})
  },
  logs: function(e) {
    wx.navigateTo({
      url: '/pages/user/user/logs'
    })
  },

    /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})