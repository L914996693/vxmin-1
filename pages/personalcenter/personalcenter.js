//获取应用实例
const app = getApp();
const WebSocket = require('../util/websocket.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    appformflag:true,
    orderflag:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            appformflag: false,
            orderflag: false
          })
        }
      })
    }

    //创建连接
    WebSocket.connectSocket();
    // 设置接收消息回调
    WebSocket.onSocketMessageCallback = this.onSocketMessageCallback;

  },

  // Socket收到的信息
  onSocketMessageCallback: function(res) {
    var _this = this;
    _this.setData({
      appformflag:false,
      orderflag:false
    })
    console.log(res);
  },

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
    WebSocket.closeSocket();
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

  },

  /**
   * 更新收料申请单记录徽章
   */
  appf_appformflag:function(){
    var _this = this;
    _this.setData({
      appformflag:true
    })
  },

  /**
   * 更新订单记录徽章
   */
  order_orderflag:function(){
    var _this = this;
    _this.setData({
      orderflag:true
    })
  }
})
