//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.login({
          success: res => {
            //console.log(res);	//用户登录凭证 
            // 发送 res.code 到后台换取 openId, sessionKey
            var code = res.code;
            var appid = 'wx59f1613dba372d2b';	//小程序的appid
            var secret = '38fdabae6687ffae679bdb9fea9e6ef6';	//小程序的secret
            wx.request({
              url: 'https://api.weixin.qq.com/sns/jscode2session?appid='+appid+'&secret='+secret+'&grant_type=authorization_code&js_code='+code,
              header: { 'content-type': 'application/json' },
              success:function(res){
                //console.log(res);	// 返回的数据
                wx.setStorageSync('openId', res.data.openid);
                //console.log(res.data.openid);	// openid
                //console.log(wx.getStorageSync('openId'));
              }
            })
          }
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})