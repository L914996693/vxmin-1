// pages/schedule/schedule.js

Page({
  dayClick: function (event) {
    //event.detail='#00BFFF';
    //console.log(event.detail.year+"-"+event.detail.month+"-"+event.detail.day);
    var month = event.detail.month
    var index = this.returnexistencemonth(this.data.effectivemonth,month)
    if(index===1){
      this.setData({
        androidDialog2: true,
        preselectdate:event.detail.year+"-"+event.detail.month+"-"+event.detail.day
      });
    }else{

    }
    
    //console.log("月份="+event.detail.month+"--日期="+event.detail.day);
    
  },
  next: function (event) {
    var month = event.detail.currentMonth
    var index = this.returnexistencemonth(this.data.effectivemonth,month)
    //console.log(index);
    if(index===1){
      let days_style = new Array;
      days_style.push(
        {month: 'current', day: 12, color: '#314580', background: '#6495ED'},
        {month: 'current', day: 2, color: '#314580', background: '#6495ED'}
      )
      this.setData({
        days_style:days_style
      })
    }else{
      let days_style = new Array;
      this.setData({
        days_style:days_style
      })
    }
    
    //console.log(event.detail);
  },
  prev: function (event) {
    var month = event.detail.currentMonth
    var index = this.returnexistencemonth(this.data.effectivemonth,month)
    //console.log(index);
    if(index===1){
      let days_style = new Array;
      days_style.push(
        {month: 'current', day: 12, color: '#314580', background: '#6495ED'},
        {month: 'current', day: 2, color: '#314580', background: '#6495ED'}
      )
      this.setData({
        days_style:days_style
      })
    }else{
      let days_style = new Array;
      this.setData({
        days_style:days_style
      })
    }
  },
  dateChange: function (event) {
    //console.log(event.detail);
  },
  /**
   * 页面的初始数据
   */
  data: {
    effectivedays:{
      "11":[1,15],
      "12":[3,5],
    },
    effectivemonth:[11,12],
    preselectdate:'',
    selectdate:'',
    androidDialog2:false,
    iosDialog2: false,
    days_style:[],


      msg:"hello world",
      num:10000,
      isb:false,
      person:{
        id:'1',
        age:74,
        height:145,
        weight:200,
        name:"富婆"
      },
      isChecked:false,
      data_list:[
        {
          id:0,
          name:'name0'
        },{
          id:1,
          name:'name1'
        },{
          id:2,
          name:'name2'
        },
      ]
  },

  close: function () {
    //console.log(this.selectdate);
    this.setData({
      androidDialog2: false,
    })
  },

  conclose:function(){
    this.setData({
      androidDialog2: false,
      selectdate:this.data.preselectdate
    })
  },

  openAndroid2: function() {
    this.setData({
        androidDialog2: true
    });
  },

  
  //输入框的input时间的执行逻辑
  handleInput(e){
    this.setData({
      num:e.detail.value
    });
    //console.log(e.detail.value);
  },
  //加减按钮事件
  handletap(e){
    //console.log(e.currentTarget.dataset);
    const operation = e.currentTarget.dataset.operation;
    this.setData({
      num:this.data.num+operation
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    var n = timestamp * 1000;  
    var date = new Date(n);
    //年  
    var Y = date.getFullYear();  
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);  
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();  
    //时  
    var h = date.getHours();  
    //分  
    var m = date.getMinutes();  
    //秒  
    var s = date.getSeconds();
    var index = this.returnexistencemonth(this.data.effectivemonth,M)
    //console.log(index)
    if(index===1){
      let days_style = new Array;
      let mdata = this.data.effectivedays;

      console.log(mdata[M]);
      days_style.push(
        {month: 'current', day: 11, color: '#314580', background: '#6495ED'},
        {month: 'current', day: 1, color: '#314580', background: '#6495ED'}
      )
      this.setData({
        days_style:days_style
      })
    }
    
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
  returnexistencemonth:function(effectivemonth,nowmonth){
    for(let i=0;i<effectivemonth.length;i++){
      if(nowmonth===effectivemonth[i]){
        return 1;
      }
    }
    return -1;
  }
})