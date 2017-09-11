//app.js
var util = require('./utils/util.js');
App({
  onLaunch: function() {
    var that = this;
    var userInfo = wx.getStorage({
      key: 'userInfo',
      fail: function (e) {
        util.getUserInfo(function (userInfo) {
          //更新数据
          that.globalData.userInfo = userInfo;
          wx.setStorage({
            key: 'userInfo',
            data: userInfo
          });
        })
      },
      success: function (res) {
        that.globalData.userInfo = res.data;
      }
    })
   
  },
  onShareAppMessage () {
    return {
      path: 'pages/index/index'
    }
  },
  globalData: {
    userInfo: null
  }
})
