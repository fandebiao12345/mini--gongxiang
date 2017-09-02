// serve-mini.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title1: {
      h1: '率先抢占小程序发布先机',
      h2: '小程序是四年内最大的移动互联网商机，率先上线小程序，抢占流量红利，实现营收激增'
    },
    title2: {
      h1: '创造您的产品新价值的经营渠道',
      h2: '针对商家经营和运营活动开发的小程序制作平台，拥有更实用、更高频功能的“小程序”，帮助商户的线上营销提升到新高度'
    },
    title3: {
      h1: '小程序应用的行业和场景',
      h2: '我需要做小程序吗？作为企业与消费者在任意场景建立链接的最佳工具，小程序尤其适合'
    },
    title4: {
      h1: '小程序入口便捷',
      h2: '已有多种方式，找到和推广你的小程序，吸引更多目光'
    },
    part3Content: [{
      img: 'https://mini.0315678.cn/wxImg/serve/mini/part-3-1.png',
      text: '电商行业'
    },{
      img: 'https://mini.0315678.cn/wxImg/serve/mini/part-3-2.png',
      text: '金融行业'
    },{
      img: 'https://mini.0315678.cn/wxImg/serve/mini/part-3-3.png',
      text: 'O2O行业'
    },{
      img: 'https://mini.0315678.cn/wxImg/serve/mini/part-3-4.png',
      text: '生活服务类'
    },{
      img: 'https://mini.0315678.cn/wxImg/serve/mini/part-3-5.png',
      text: '培训行业'
    },{
      img: 'https://mini.0315678.cn/wxImg/serve/mini/part-3-6.png',
      text: '旅游行业'
    },{
      img: 'https://mini.0315678.cn/wxImg/serve/mini/part-3-7.png',
      text: '社交工具类'
    },{
      img: 'https://mini.0315678.cn/wxImg/serve/mini/part-3-8.png',
      text: '移动办公'
    }],
    part4Content: [{
      img: 'https://mini.0315678.cn/wxImg/serve/mini/part-4-1.png',
      text1: '搜索',
      text2: '在“小程序中搜索店铺名字找到你的小程序”'
    },{
      img: 'https://mini.0315678.cn/wxImg/serve/mini/part-4-2.png',
      text1: '二维码',
      text2: '扫描小程序二维码快速引流到店铺'
    },{
      img: 'https://mini.0315678.cn/wxImg/serve/mini/part-4-3.png',
      text1: '微信聊天',
      text2: '推荐小程序给微信好友'
    },{
      img: 'https://mini.0315678.cn/wxImg/serve/mini/part-4-4.png',
      text1: '微信公众号',
      text2: '从公众号关联小程序添加店铺入口'
    },{
      img: 'https://mini.0315678.cn/wxImg/serve/mini/part-4-5.png',
      text1: '微信好友',
      text2: '推荐小程序给微信好友'
    },{
      img: 'https://mini.0315678.cn/wxImg/serve/mini/part-4-6.png',
      text1: '微信群',
      text2: '在微信群分享'
    },{
      img: 'https://mini.0315678.cn/wxImg/serve/mini/part-4-7.png',
      text1: '切换',
      text2: '小程序和聊天随时切换随时购买'
    },{
      img: 'https://mini.0315678.cn/wxImg/serve/mini/part-4-8.png',
      text1: '二维码',
      text2: '期待优化中'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  onTapContact () {
    console.log(1);
    wx.makePhoneCall({
      phoneNumber: '400-8858-406'
    })
  },
  onTapVideo () {
    wx.navigateTo({
      url: '/pages/serve/serve-mini/video/video'
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