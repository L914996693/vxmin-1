// pages/schedule/schedule.js
const app = getApp();
//url_applicationre
const WebSocket = require('../util/websocket.js');

Page({
  dayClick: function (event) {
    //console.log(event.detail);
    //console.log(event.detail.year+"-"+event.detail.month+"-"+event.detail.day);
    var month = event.detail.month
    var year = event.detail.year
    var day = event.detail.day
    var index_year = this.returnexistenceyear(this.data.effectiveyears,year)
    if(index_year===1){
      var index_month = this.returnexistencemonth(this.data.effectivemonth,month)
      if(index_month===1){
        let years_arr = this.data.effectivedays[year];
        let month_arr = years_arr[month];
        var index_day = this.returnexistenceday(month_arr,day)
        //console.log(index_day)
        if(index_day===1){
          this.setData({
            androidDialog2: true,
            preselectdate:event.detail.year+"-"+event.detail.month+"-"+event.detail.day
          });
        }  
      }else{
  
      }
    }
  },
  next: function (event) {
    var month = event.detail.currentMonth
    var year = event.detail.currentYear
    var index_year = this.returnexistenceyear(this.data.effectiveyears,year)
    if(index_year===1){
      var index = this.returnexistencemonth(this.data.effectivemonth,month)
      if(index===1){
        let days_style = new Array;
        let mdata = this.data.effectivedays;
        let arr_year = mdata[year];
        let arr_month = arr_year[month];
        for(let i=0;i<arr_month.length;i++){
          days_style.push({month: 'current', day: arr_month[i], color: '#314580', background: '#6495ED'});
        }
        this.setData({
          days_style:days_style
        })
      }else{
        let days_style = new Array;
        this.setData({
          days_style:days_style
        })
      }
    }else{
      let days_style = new Array;
        this.setData({
          days_style:days_style
        })
    }
  },
  prev: function (event) {
    var month = event.detail.currentMonth
    var year = event.detail.currentYear
    var index_year = this.returnexistenceyear(this.data.effectiveyears,year)
    if(index_year===1){
      var index = this.returnexistencemonth(this.data.effectivemonth,month)
      if(index===1){
        let days_style = new Array;
        let mdata = this.data.effectivedays;
        let arr_year = mdata[year];
        let arr_month = arr_year[month];
        for(let i=0;i<arr_month.length;i++){
          days_style.push({month: 'current', day: arr_month[i], color: '#314580', background: '#6495ED'});
        }
        this.setData({
          days_style:days_style
        })
      }else{
        let days_style = new Array;
        this.setData({
          days_style:days_style
        })
      }
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
      "2020":{
        "11":[1,15],
        "12":[3,5],
      }
    },
    effectivemonth:[11,12],
    effectiveyears:[2020],
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
    //创建连接
    WebSocket.connectSocket();
    // 设置接收消息回调
    WebSocket.onSocketMessageCallback = this.onSocketMessageCallback;


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
    var index_year = this.returnexistenceyear(this.data.effectiveyears,Y)
    if(index_year===1){
      var index = this.returnexistencemonth(this.data.effectivemonth,M)
      if(index===1){
        let days_style = new Array;
        let mdata = this.data.effectivedays;
  
        let arr_year = mdata[Y];
        let arr_month = arr_year[M];
        for(let i=0;i<arr_month.length;i++){
          days_style.push({month: 'current', day: arr_month[i], color: '#314580', background: '#6495ED'});
        }
        
        this.setData({
          days_style:days_style
        })
      }
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

  /** 
   * 跳转至填写申请信息页面
  */
  fillinformation:function(e){
    //console.log(e.currentTarget.dataset.operation)
    if(e.currentTarget.dataset.operation!=''){
      var date = e.currentTarget.dataset.operation;
      wx.navigateTo({
        url: '/pages/fillinformation/fillinformation?json='+ JSON.stringify(date),
      })
    }
    
  },

  /**
   * 判断月份是否在数组内
   */
  returnexistencemonth:function(effectivemonth,nowmonth){
    for(let i=0;i<effectivemonth.length;i++){
      if(nowmonth===effectivemonth[i]){
        return 1;
      }
    }
    return -1;
  },
  /**
   * 判断日期是否在数组内
   */
  returnexistenceday:function(effectivedays,nowday){
    for(let i=0;i<effectivedays.length;i++){
      if(nowday===effectivedays[i]){
        return 1;
      }
    }
    return -1;
  },
  /**
   * 判断年份是否在数组内
   */
  returnexistenceyear:function(effectiveyears,nowyear){
    for(let i=0;i<effectiveyears.length;i++){
      if(nowyear===effectiveyears[i]){
        return 1;
      }
    }
    return -1;
  },

  // Socket收到的信息
  onSocketMessageCallback: function(res) {
    var _this = this;
    _this.setData({
      effectivedays:{
        "2020":{
          "12":[5],
        }
      },
      effectivemonth:[12]
    })
    console.log(res);
  },
})