//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    aa:'haha',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
      value: 'auto-focus可以自动聚焦',
      //下面是微信的input
      data_code:'',
      time: "获取验证码",
      suffix:'',//倒计时
      array: ['美国', '中国', '巴西', '日本'],
      checked: true,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 获取输入框的值
  getInputKey(e) {
    let key = e.currentTarget.dataset.name;
    let value = e.detail.value;
    this.setData({
      [key]: value
    })
  },

  // 获取验证码
  getVerificationCode() {
    let _this = this;
    if (!_this.data.disabled) {
      console.log("呵呵")
    }
  },
  getmockdata (){
    console.log('haha')
    wx.request({
      url: 'https://example.com/ajax?dataType=member',
      dataType: 'json',
      success(res) {
        console.log(res)
      }
    })
  },
  // picker使用
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  onChange(event) {
    this.setData({
      checked: event.detail,
    });
  },
  onLoad: function () {
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
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
