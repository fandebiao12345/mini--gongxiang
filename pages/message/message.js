var util = require('../../utils/util.js');
var appInstance = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    userInfo: {
      nickName: '神秘人',
      avatarUrl: 'http://mini.0315678.cn/wxImg/message/anonymous.png'
    },
    num: 998,
    src: '',
    message: [{
      nickName: '美猴王',
      avatar: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83er4KeSEePVNrOPTzF2p5eoc0yXMXEBBb5kTenqaYt6E053jCZicKJ4QWwYMywjFYmFJ3G31shWyTZg/0',
      text: '看完您的说说后,我的心久久不能平静!这条说说构思新颖,题材独具匠心,段落清晰,情节诡异,跌宕起伏,主线分明,引人入胜,平淡中显示出不凡的文学功底,可谓是字字珠玑,句句经典,是我辈应学习之典范.',
      date: '2017-1-2'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo();
    
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
  onReachBottom: function (e) {
    this.data.message.push({
      nickName: '美猴王',
      avatar: 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83er4KeSEePVNrOPTzF2p5eoc0yXMXEBBb5kTenqaYt6E053jCZicKJ4QWwYMywjFYmFJ3G31shWyTZg/0',
      text: '看完您的说说后,我的心久久不能平静!这条说说构思新颖,题材独具匠心,段落清晰,情节诡异,跌宕起伏,主线分明,引人入胜,平淡中显示出不凡的文学功底,可谓是字字珠玑,句句经典,是我辈应学习之典范.',
      date: '2017-1-2'
    })
    this.setData({
      message: this.data.message
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 从aap.js中获取用户信息
  getUserInfo() {
    if (appInstance.globalData.userInfo) {
      this.setData({
        userInfo: {
          nickName: appInstance.globalData.userInfo.nickName,
          avatarUrl: appInstance.globalData.userInfo.avatarUrl
        }
      })
    }
  },
  onPhotoTap() {
    var This = this;
    wx.chooseImage({
      count: 3,
      success: function (res) {
        console.log(res.tempFilePaths)
        This.setData({
          src: res.tempFilePaths
        })
      }
    })
  },
  onSubmit(e) {
    if (this.data.userInfo.nickName === '神秘人') {
      let that = this;
      wx.showModal({
        title: '发表失败',
        content: '只有授权登陆才能发表留言哦',
        showCancel: false,
        success: (res) => {
          // 从新获取用户信息
          wx.openSetting({
            success: (res) => {
              if (res.authSetting['scope.userInfo']) {
                wx.getUserInfo({
                  success: (res) => {
                    util.getUserInfo(function (userInfo) {
                      //更新数据
                      that.setData({
                        userInfo: userInfo
                      });
                      wx.setStorage({
                        key: 'userInfo',
                        data: userInfo
                      });
                    })
                  }
                })
              }
            }
          });
        }
      })

      return;
    }
    let text = e.detail.value.textarea;
    let messageList = this.data.message;
    let date = new Date().toLocaleDateString();
    date = date.split('\/');
    date = date.join('-');
    let message = {
      nickName: this.data.userInfo.nickName,
      avatar: this.data.userInfo.avatarUrl,
      text: text,
      date: date
    }
  }
})