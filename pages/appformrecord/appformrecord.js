// pages/appformrecord/appformrecord.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data_list:[
        {
          id:1,
          acc:100,
          proname:"商品1",
          hname1:"标题1",
          hname2:"标题2"
        },
        {
          id:2,
          acc:200,
          proname:"商品2",
          hname1:"标题1",
          hname2:"标题2"
        }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    wx.request( {
      url: "http://127.0.0.1:8082/wx/applicationre",
      header: {
        "Content-Type": "application/json"
      },
      method: "POST",
      success: function (res) {
        //console.log(res.data);
        /* //console.log(res.data.imgListData)
        //console.log(res.data.imgListData[0].tag)
        //将获取到的json数据，存在名字叫list_data的这个数组中 */
        _this.setData({
          data_list: res.data,
          //res代表success函数的事件对，data是固定的，imgListData是上面json数据中imgListData
        })
      }
    })
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

  /*与后台连通性测试 */
  testjava(e){
    const operation = e.currentTarget.dataset.operation;
    wx.request({
      url: getApp().globalData.url_appfromrecord,
      header: {
        "Content-Type": "application/json"
      },
      method: "POST",
      data:{
        proid:operation
      },
      success: function (res) {
        //console.log(res.data);
        //console.log("res.data--->"+res.data.data);
        wx.navigateTo({
          //url填写你要跳转的页面
          url: '/pages/applydetails/applydetails?json=' + JSON.stringify(res.data.data)
        })
        /* wx.navigateBack({
          delta: 1  //小程序关闭当前页面返回上一页面
        })
        wx.showToast({
          title: '评教成功！',
          icon: 'success',
          duration: 2000
        }) */
      }
    })
  }
})