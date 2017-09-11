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
    banner: ['https://mini.0315678.cn/wxImg/index/banner-1.jpg', 'https://mini.0315678.cn/wxImg/index/banner-2.jpg', 'https://mini.0315678.cn/wxImg/index/banner-3.jpg'],
    teamPicture: [{
      src: "https://mini.0315678.cn/wxImg/index/team-WG.jpg",
      name: "王木川",
      id: "p1",
      job: "共享科技创始人",
      text: '毕业于河北软件学院，十二年底层互联网执迷者，大学创业，前保定市迪声视听科技有限公司法人及创始人，曾创办中国夜店网，坝上信息网，忆往昔；2011年在唐山某知名传媒公司从事活动策划执行工作四年，积累大量营销策划经验和创意；2015年6月正式辞职创办北京优帮科技有限公司。'
    }, {
      src: "https://mini.0315678.cn/wxImg/index/team-FJ.jpg",
      name: "菲菲",
      id: "p2",
      job: '市场部主管',
      text: '2011年毕业于北京交通大学，人力资源管理专业，2011年进入北京崇德Top Sports，担任销售和市场督导，2013年，国家中小企业公共示范服务平台唐山平台，全面管理平台市场业务和会员服务，2015年，进入北京小萤科技有限公司，从事市场工作。'
    }, {
      src: "https://mini.0315678.cn/wxImg/index/team-JJ.jpg",
      name: "佳佳",
      id: "p3",
      job: '客服主管',
      text: '毕业后，任职于唐山金信实业集团，从事工商管理及行政管理相关工作；后任职于咱们家（北京）商贸有限公司，从事O2O运营相关工作;2015年8月- 至今，加入北京优帮科技有限公司（唐山共享科技有限公司），主要负责需求构架、域名备案、微信公众号管理、财务及行政管理等各项工作。'
    }, {
      src: "https://mini.0315678.cn/wxImg/index/team-XY.jpg",
      name: "小颖",
      id: "p4",
      job: '策划专员',
      text: '新闻学专业90后天枰座文案策划，清晰、鲜活、有性格；上升处女，纠结、敏感，又追求完美细节。两年报社编辑记者的工作经验，从积累到输出，善于拥有对生活细节的洞察；能温润含蓄的直抵人心，也能毫不矜持的写出打马赛克的段子。每个字都是自己的选择，希望能真正地传达出文字的力量。'
    }, {
      src: "https://mini.0315678.cn/wxImg/index/team-XW.jpg",
      name: "小文",
      id: "p5",
      job: '行政财务',
      text: '毕业于河北经贸大学会计学，曾就职于唐山市某电器公司，担任会计，于2014年12月至今任职于唐山卓穆网络科技有限公司财务部，主要负责公司财务管理及后勤工作。'
    }, {
      src: "https://mini.0315678.cn/wxImg/index/team-XH.jpg",
      name: "一思",
      id: "p6",
      job: '行政专员',
      text: '啦啦啦啦啦'
    }, {
      src: "https://mini.0315678.cn/wxImg/index/team-ly.jpg",
      name: "刘怡",
      id: "p7",
      job: '平面设计师',
      text: '大家好，我叫刘怡，燕京理工学院在校生，视觉传达设计专业。三年网页设计、视频剪辑和平面设计学习经验，有手绘基础；作品多次在学院展厅展览，担任设计。或许外表给人感觉有点文静，其实生活上比较乐观积极。喜欢运动，文学作品和电影。初来乍到不久，相识就是缘分，相信每个人都能给我不一样的力量学到更多的东西积累经验，很期待和大家一起慢慢成长蜕变！'
    }, {
      src: "https://mini.0315678.cn/wxImg/index/team-ZQ.jpg",
      name: "子琪",
      id: "p8",
      job: 'UI设计师',
      text: '毕业于南京艺术学院艺术设计专业，做过3年平面设计，一年ui设计，积累了相关工作经验，现就职于共享科技有限公司。'
    }, {
      src: "https://mini.0315678.cn/wxImg/index/team-SY.jpg",
      name: "苏阳",
      id: "p9",
      job: '市场专员',
      text: '2014年，毕业于唐山职业技术学院，一直从事销售业务方面的工作，待客户诚恳，客户都很信任我，我希望在这个岗位，结交越来越多的人脉。'
    }, {
      src: "https://mini.0315678.cn/wxImg/index/team-WQ.jpg",
      name: "吴琼",
      id: "p10",
      job: 'IOS工程师',
      text: '3年iOS研发经验。拥有外包和产品两种开发经历。 多个项目到AppStore。专注于iOS原生应用类程序开发。开发过的作品涉及旅游、交通、社交、视频等方面，对即时聊天、流媒体等技术有深入研究。'
    }, {
      src: "https://mini.0315678.cn/wxImg/index/team-DP.jpg",
      name: "大鹏",
      id: "p11",
      job: '前端工程师',
      text: '毕业于集美大学，多年web前端开发经验，负责共享科技有限公司的微信小程序，web应用等业务的技术开发，为人谦逊，处事低调，对待每个项目认真负责，有着严重的代码洁癖，每一个细节都要做到最好最优。'
    }],
    nowId: 1,
    toId: 'p1',
    scrollLeft: null,
    distance: 0,
    cooperations: ['https://mini.0315678.cn/wxImg/index/cooperation-1.png', 'https://mini.0315678.cn/wxImg/index/cooperation-2.png', 'https://mini.0315678.cn/wxImg/index/cooperation-3.png', 'https://mini.0315678.cn/wxImg/index/cooperation-4.png', 'https://mini.0315678.cn/wxImg/index/cooperation-5.png', 'https://mini.0315678.cn/wxImg/index/cooperation-6.png'],
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
    iconSize: [{
      width: 65,
      height: 65
    }, {
      width: 65,
      height: 65
    }, {
      width: 65,
      height: 65
    }, {
      width: 65,
      height: 65
    }, {
      width: 65,
      height: 65
    }, {
      width: 65,
      height: 65
    }]
  },
  //获取当前左边展示的图片ID数
  onBindScroll: function (e) {
    var x = e.detail.scrollLeft / this.data.distance;
    this.setData({
      nowId: Math.round(x + 1)
    })
  },
  //  设置图片的宽度
  setImgSize(e) {
    let index = e.currentTarget.dataset.index;
    let iconSize = this.data.iconSize;
    let size = e.detail;
    iconSize[index] = size;
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
    var toId = 'p' + (nowId + 1);
    this.setData({
      toId: toId,
      nowId: nowId + 1,
      enableClick: false
    });
    this.setEnableClick();
  },
  onLeftTap: function () {
    var nowId = this.data.nowId;
    if (nowId < 1 || !this.data.enableClick) {
      return
    }
    // 防止在第一个时不紧贴不能滚动
    if (nowId == 1) {
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
    this.checkCreateSelectorQuery();
  },
  onTapBanner() {
    wx.navigateTo({
      url: '/pages/serve/serve-mini/serve-mini'
    })
  },
  onReady: function () {

  },
  // 检测是否可以用dom节点
  checkCreateSelectorQuery() {
    if (wx.createSelectorQuery) {
      this.getDistance();
    } else {
      this.setData({
        over: false
      })
    }
  },
  // 获取单个照片的宽度
  getDistance() {
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
  phone() {
    wx.makePhoneCall({
      phoneNumber: '400 - 8858 - 406'
    })
  },
  onShareAppMessage: function () {

  },
  onTapTwoCon() {
    wx.previewImage({
      urls: [
        'https://mini.0315678.cn/wxImg/index/two-contact.jpg',
        'https://mini.0315678.cn/wxImg/index/two-suggest.jpg'
      ]
    })
  },
  onTapTwoSug() {
    wx.previewImage({
      urls: [
        'https://mini.0315678.cn/wxImg/index/two-suggest.jpg',
        'https://mini.0315678.cn/wxImg/index/two-contact.jpg'
      ]
    })
  },
  // 点击查看成员
  onTapTeam(e) {
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
