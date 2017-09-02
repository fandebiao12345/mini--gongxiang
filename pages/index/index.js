//index.js
//获取应用实例
var util = require('../../utils/util.js');

var app = getApp()
Page({
  data: {
    summary: "公司简介",
    team: "团队成员",
    cooperation: "合作企业",
    map: "联系我们",
    over: true,
    banner: [],
    teamPicture: [],
    nowId: 1,
    toId: 'p1',
    scrollLeft: null,
    distance: 0,
    cooperations :[],
    markers: [{
      latitude: 39.625080,
      longitude: 118.148070,
      iconPath: '/img/end.png',
      callout: {
        content: '唐山共享科技有限公司',
        borderRadius: 10,
        padding: 10,
        display: 'ALWAYS',
        color: "#000000",
        bgColor: '#ffffff'
      }
    }],
    polyline: null,
    enableClick: true,
    layout: false,
    animationData: {},
    animationLayout: {},
    introduction: '',
    currentLayoutLogo: '',
    iconSize: []
  },
  //获取当前左边展示的图片ID数
  onBindScroll: function (e) {
    var x = e.detail.scrollLeft / this.data.distance;
    this.setData({
      nowId: Math.round(x + 1)
    })
  },
  //  设置图片的宽度
  setImgSize (e) {
    let iconSize = this.data.iconSize;
    let size = e.detail;
    console.log(size);
    iconSize.push(size);
    this.setData({
      iconSize: iconSize
    })
  },
  onRightTap: function () {
    if (this.data.nowId > this.data.teamPicture.length - 2 || !this.data.enableClick) {
      return
    }
    if (this.data.nowId == this.data.teamPicture.length - 2) {
      this.setData({
        scrollLeft: this.data.distance * this.data.teamPicture.length,
        enableClick: false
      })
      this.setEnableClick();
      return
    }
    var nowId = this.data.nowId;
    var toId = 'p'+(nowId+1);
    this.setData({
      toId: toId,
      nowId: nowId + 1,
      enableClick: false
    });
    this.setEnableClick();
  },
  onLeftTap: function () {
    var nowId = this.data.nowId;
    if (nowId < 1 || !this.data.enableClick){
      return
    }
    // 防止在第一个时不紧贴不能滚动
    if (nowId == 1){
      this.setData({
        scrollLeft: 0,
        enableClick: false
      })
      this.setEnableClick();
      return
    }
    var toId = 'p' + (nowId - 1);
    this.setData({
      toId: toId,
      nowId: nowId - 1,
      enableClick: false
    });
    this.setEnableClick();
  },
  setEnableClick: function () {
    setTimeout(() => {
      this.setData({
        enableClick: true
      })
    }, 300)
  },
  onLoad: function () {
    const bannerAPI = 'http://easy-mock.com/mock/599bcc1c059b9c566dcabfa4/gongxiang/index';
    util.getLocation(this.getLocation);
    let This = this;
    wx.request({
      url: bannerAPI,
      data: 'application/json',
      success: function (res) {
        let banner = res.data.banner;
        let team = res.data.team;
        let cooperations = res.data.cooperations;
        This.setData({
          banner: banner,
          teamPicture: team,
          cooperations: cooperations
        });
        setTimeout(()=>{
          This.checkCreateSelectorQuery();
        },500);
      }
    })
  },
  onTapBanner () {
    wx.navigateTo({
      url: '/pages/serve/serve-mini/serve-mini'
    })
  },
  //获取用户位置
  getLocation: function (res) {
    this.setData({
      polyline: [{
        points: [{
          longitude: 118.148070,
          latitude: 39.625080
        }, {
          longitude: res.longitude,
          latitude: res.latitude
        }],
        color: "#FF0000DD",
        width: 2,
        arrowLine: true
      }],
      markers: [{
        latitude: 39.625080,
        longitude: 118.148070,
        iconPath: '/img/end.png',
        callout: {
          content: '唐山共享科技有限公司',
          borderRadius: 10,
          padding: 10,
          display: 'ALWAYS',
          color: "#000000",
          bgColor: '#ffffff'
        }
      }, {
        longitude: res.longitude,
        latitude: res.latitude,
        iconPath: '/img/begin.png'
      }]
    })
  },
  onReady: function () {
    
  },
  // 检测是否可以用dom节点
  checkCreateSelectorQuery () {
    if (wx.createSelectorQuery) {
      this.getDistance();
    } else {
      this.setData({
        over: false
      })
    }
  },
  // 获取单个照片的宽度
  getDistance () {
    var query = wx.createSelectorQuery();
    query.select('.team-item').boundingClientRect();
    var that = this;
    query.exec(function (res) {
      that.setData({
        distance: res[0].width - 1
      })
    })
  },
  // 拨打电话
  phone () {
    wx.makePhoneCall({
      phoneNumber: '400 - 8858 - 406'
    })
  },
  onShareAppMessage: function () {

  },
  onTapTwoCon () {
    wx.previewImage({
      urls: [
        'https://mini.0315678.cn/wxImg/index/two-contact.jpg',
        'https://mini.0315678.cn/wxImg/index/two-suggest.jpg'
      ]
    })
  },
  onTapTwoSug () {
    wx.previewImage({
      urls: [
        'https://mini.0315678.cn/wxImg/index/two-suggest.jpg',
        'https://mini.0315678.cn/wxImg/index/two-contact.jpg'
      ]
    })
  },
  // 点击查看成员
  onTapTeam (e) {
    var index = e.currentTarget.dataset.index;
    this.setData({
      layout: true,
      introduction: this.data.teamPicture[index].text,
      currentLayoutLogo: this.data.teamPicture[index].src
    });
    this.animationDrop();
    this.animationOpacity();
  },
  animationDrop() {
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease'
    });
    animation.translateY(0).step();
    this.setData({
      animationData: animation.export()
    })
  },
  animationOpacity() {
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease'
    });
    animation.opacity(0.6).step();
    this.setData({
      animationLayout: animation.export()
    })
  },
  animationUp() {
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease'
    });
    animation.translateY(-520).step();
    this.setData({
      animationData: animation.export()
    });
  },
  animationOpacityClose() {
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease'
    });
    animation.opacity(0).step();
    this.setData({
      animationLayout: animation.export()
    })
  },
  // 关闭弹窗
  onTapClose() {
    this.animationUp();
    this.animationOpacityClose();
    setTimeout(() => {
      this.setData({
        layout: false
      });
    }, 500)
  }
})
