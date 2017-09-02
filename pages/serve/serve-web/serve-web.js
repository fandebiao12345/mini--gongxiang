// serve-web.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title1: {
      h1: '高品质互联网开发服务商',
      h2: '一个只用技术实力说话的团队，为您提供最具营销价值的互联网开发服务。'
    },
    title2: {
      h1: '为什么选择我们？',
      h2: '我们从不靠有数量无质量制作网站来盈利、我们追求是设计质量，我们有自己严谨的设计理念和要求，我们不做低价建站业务，拒绝平庸！只服务卓越的您！'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  onTapContact() {
    console.log(1);
    wx.makePhoneCall({
      phoneNumber: '400-8858-406'
    })
  }
})