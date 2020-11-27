// pages/fillinformation/fillinformation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    showClearBtn: false,
    isWaring: false,
    array3: ['中国', '美国', '英国'],
    value3: 0,
  },

  onInput(evt) {
    const { value } = evt.detail;
    this.setData({
        value,
        showClearBtn: !!value.length,
        isWaring: false,
    });
  },

  onClear() {
    this.setData({
        value: '',
        showClearBtn: false,
        isWaring: false,
    });
  },

  /**
   * 判断卡号长度
   */
  onConfirm() {
    if (this.data.value.length < 16) {
        this.setData({
            isWaring: true,
        });
    }
  },

  /**
   * 获取并改变下拉框信息 
   */
  bindPicker3Change: function(e) {
    this.setData({
        value3: e.detail.value
    })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let o = options.json;
    console.log(o);
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

  }
})