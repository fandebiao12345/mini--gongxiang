// serve-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    meal: {},
    compare: {
      title: '套餐对比',
      eng: 'Combo comparison'
    },
    display: {
      title: '案例展示',
      eng: 'Service advan'
    }
  },
  onTappreviewImage(e) {
    console.log(e);
    let index = e.currentTarget.dataset.index;
    console.log(this.data.meal.diplay[index].image)
    wx.previewImage({
      urls: [this.data.meal.diplay[index].image],
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var meal = JSON.parse(options.meal);
    this.setData({
      meal: meal
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
  
  }
})