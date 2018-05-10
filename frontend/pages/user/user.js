const App = getApp()

Page({
	data: {
		userInfo: {}
	},
	onLoad() {
		this.getUserInfo()
	},
	onShow() {
		this.getStorageInfo()
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
    getStorageInfo() {
    	App.WxService.getStorageInfo()
    	.then(data => {
    		console.log(data)
    		this.setData({
    			'settings[0].path': `${data.currentSize}KB`
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
})