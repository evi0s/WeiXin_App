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
	navigateTo(e) {
		const index = e.currentTarget.dataset.index
		const path = e.currentTarget.dataset.path

		switch(index) {
			case 2:
				App.WxService.makePhoneCall({
					phoneNumber: path
				})
				break
			default:
				App.WxService.navigateTo(path)
		}
    },
    getUserInfo() {
    	const userInfo = App.globalData.userInfo

		if (userInfo) {
			this.setData({
				userInfo: userInfo
			})
			return
		}

		App.getUserInfo()
		.then(data => {
			console.log(data)
			this.setData({
				userInfo: data
			})
		})
    },
    bindtap(e) {
    	const index = e.currentTarget.dataset.index
		  const path = e.currentTarget.dataset.path

		switch(index) {
			case 0:
				App.WxService.showModal({
		            title: '友情提示', 
		            content: '确定要清除缓存吗？', 
		        })
		        .then(data => data.confirm == 1 && App.WxService.clearStorage())
				break
			default:
				App.WxService.navigateTo(path)
		}
    },

    /**
   * 用户点击右上角分享
   */
    onShareAppMessage: function () {

    }
})