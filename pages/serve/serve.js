// serve.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    project: {
      title: '我们的服务',
      eng: 'Our services'
    },
    activeId: -1,
    active: 'active',
    advantage: {
      title: '服务优势',
      eng: 'Serviece advantage',
      chinese: 'chinese-advan',
      english: 'english-advan',
      titleClass: 'adTitle'
    },
    advantages: [{
      img: 'https://mini.0315678.cn/wxImg/serve/advantage-1.png',
      text: '有效的策划'
    }, {
      img: 'https://mini.0315678.cn/wxImg/serve/advantage-2.png',
      text: '创新的设计'
    }, {
      img: 'https://mini.0315678.cn/wxImg/serve/advantage-3.png',
      text: '深入的沟通'
    }, {
      img: 'https://mini.0315678.cn/wxImg/serve/advantage-4.png',
      text: '一站式服务'
    }, {
      img: 'https://mini.0315678.cn/wxImg/serve/advantage-5.png',
      text: '互联网思维'
    }, {
      img: 'https://mini.0315678.cn/wxImg/serve/advantage-6.png',
      text: '一对一售后'
    }],
    process: {
      title: '开发流程',
      eng: 'Development process'
    },
    price: {
      title: '小程序开发套餐',
      eng: 'Development process',
      titleClass: 'priClass'
    },
    projects: [{
      text: '网站开发',
      img: 'https://mini.0315678.cn/wxImg/serve/serve-1.png',
      layoutLogo: '/img/serve/logo1.png',
      id: 'web',
      content: '网站建设包括网站策划、网页设计、网站功能、网站优化技术、网站内容整理、网站推广、网站评估、网站运营、网站整体优化、网站改版等。网站建设的前期准期网站定位、内容差异化、页面沟通等战略性调研，这些确立后，再去注册域名、租用空间。 集团网站是大型集团面向新老客户、业界人士及全社会的窗口。集团网站通常将集团日常工作，及营销活动、技术支持、售后服务、物料采购、社会公共关系处理等结合。集团网站涵盖的工作类型多，信息量大，访问群体广，信息更新需要多个部门共同完成。集团网站有利于社会对企业的全面了解。我们始终认为好的设计是帮助企业展现自己最重要的一步，而网站设计的好坏直接取决于设计师的网页设计与制作经验。本公司网站设计师平均网页设计工作经验达到四年以上，他们拥有丰富的设计经验，有着自己独特的见解，会依据客户的要求，融入自己丰富的经验，给出适合客户的个性化方案和建议，从而为客户网站的完成起到真正的保障。品牌网站着重通过优秀设计，传达其品牌；需要良好的用户体验策划，提升访客体验；并最终提升综合互联网品牌影响力。本类型网站着重展示企业CI、传播品牌文化、提高品牌知名度。对于产品品牌众多的企业，可以单独建立各个品牌的独立网站，以便市场营销策略与网站宣传统一。 企业电子商务网站以产品销售为目的，需要对运营情况和用户购买行为数据适时分析，制定个性化的营销网站建设方案进行新品介绍、主题活动、阶段主题推广的最好的形式。我们不但会根据客户需求进行创意制作，更利用社会化媒体营销的优势使Minisite被最大化的传播，达到最佳活动效果。品牌网站着重通过优秀设计，传达其品牌；需要良好的用户体验策划，提升访客体验；并最终提升综合互联网品牌影响力。本类型网站着重展示企业CI、传播品牌文化、提高品牌知名度。对于产品品牌众多的企业，可以单独建立各个品牌的独立网站，以便市场营销策略与网站宣传统一。'
    }, {
      text: '小程序开发',
      img: 'https://mini.0315678.cn/wxImg/serve/serve-2.png',
      layoutLogo: '/img/serve/logo2.png',
      id: 'wxSmall',
      content: ' 微信小程序（weixinxiaochengxu），简称小程序，缩写XCX，英文名mini program，是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或搜一下即可打开应用。 全面开放申请后，主体类型为企业、政府、媒体、其他组织或个人的开发者，均可申请注册小程序。小程序、订阅号、服务号、企业号是并行的体系。小程序是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或者搜一下即可打开应用。也体现了“用完即走”的理念，用户不用关心是否安装太多应用的问题。应用将无处不在，随时可用，但又无需安装卸载。'
    }, {
      text: '公众号开发',
      img: 'https://mini.0315678.cn/wxImg/serve/serve-3.png',
      layoutLogo: '/img/serve/logo3.png',
      id: 'wxGong',
      content: '共享科技，专注于网络品牌策划、网络品牌形象设计、软件界面设计与开发。致力于小程序开发、企业网站建设、高端品牌形象设计、交互设计、视觉设计、移动APP界面设计与开发，OA系统软件开发、用户体验于一体的专业互联网服务。'
    }, {
      text: '移动APP开发',
      img: 'https://mini.0315678.cn/wxImg/serve/serve-4.png',
      layoutLogo: '/img/serve/logo4.png',
      id: 'APP',
      content: '移动APP开发准确把握产品定位及传播受众需求，完美实现您的想法基于iPhone应用定制开发，结合iPhone本身的用户操作习惯设计，对每个界面的操作体验和每一个像素效果进行推敲，创作IOS平台上各种动态交互特效。帮助客户于 iPhone用户群体中迅速推广产品。基于Android平台app的设计开发，我们具有优秀的跨平台开发经验，提供符合安卓平台特点的设计及开发服务，多分辨率适配设计的良好操作体验。 凭借丰富的行业软件设计&实施经验，基于PC和手机系统，为您提供高品质界面设计方案以及可供延展开发的设计资源包。完全支持 Html 5，无论客户置身海外, 旅途，都可通过手机直接浏览企业网站，方便了解公司服务与产品信息，帮助品牌掌控移动设备。我们最大程度优化移动浏览体验与节约流量。针对平板电脑上的App进行专属的设计开发，按照大屏幕上特有的展现形式和操作习惯，对交互和视觉进行各种创新设计。'
    }],
    meal: [{
      text: '基础版',
      price: 3880,
      detail: {
        title: '基础版',
        price: 3880,
        text: [
          '针对不同行业',
          '实现品牌展示、宣传功能',
          '轻松拥有线上名片',
          '打造炫酷微官网',
          '便于微信小程序搜索',
          '融入微商城各大插件'
        ],
        introduce: {
          trade: '适用于公司、企业、门店、商铺等建立网上推广渠道和品牌宣传',
          own: '企业/公司/店铺简介、产品/服务介绍、合作加盟、联系方式、地理位置、促销活动、在线留言、联系客服等'
        },
        diplay: [{
          image: 'https://mini.0315678.cn/wxImg/serve/detail/meal1-case1.jpg',
          text: '理发店'
        }, {
          image: 'https://mini.0315678.cn/wxImg/serve/detail/meal1-case2.jpg',
          text: '小龙虾服务平台'
        }]
      }
    }, {
      text: '标准版',
      price: 6880,
      detail: {
        title: '标准版',
        price: 6880,
        text: [
          '基础版全部功能 ',
          '实现线上交易',
          '电商企业营销卖货',
          '借小程序相互跳转',
          '丰富平台营销功能',
          '大幅度提升点击率和转化率'
        ],
        introduce: {
          trade: '适用于婚纱摄影、KTV、美容美发、足疗洗浴、宾馆、看房、私教等行业',
          own: '设置营业时间，服务展示和介绍，服务人员管理，提供在线预约'
        },
        diplay: [{
          image: 'https://mini.0315678.cn/wxImg/serve/detail/meal2-case1.jpg',
          text: '婚纱摄影'
        }]
      }
    }, {
      text: '高级版',
      price: 9880,
      detail: {
        title: '高级版',
        price: 9880,
        text: [
          '标准版全部功能',
          '适用于餐饮企业或平台',
          'O2O入口连接线下',
          '解决餐饮业高昂的平台中介费',
          '裂变营销工具',
          '数据魔方 '
        ],
        introduce: {
          trade: '适用于服装、百货、微商等各类商品/服务销售型企业或店铺',
          own: '轮播图、商品搜索、浏览商品、商品详情、在线支付'
        },
        diplay: [{
          image: 'https://mini.0315678.cn/wxImg/serve/detail/meal3-case1.jpg',
          text: '灯具商城'
        }]
      }
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onProjectTap(e) {
    let index = e.currentTarget.dataset.index;
    switch (index) {
      case 1:
        wx.navigateTo({
          url: './serve-mini/serve-mini'
        })
        break;
      case 0:
        wx.navigateTo({
          url: './serve-web/serve-web'
        })
        break;
      case 3:
        wx.navigateTo({
          url: './serve-app/serve-app',
        })
        break;
      case 2:
        wx.navigateTo({
          url: './serve-public/serve-public',
        })
        break;
    }
  },
  onTapClose() {
    this.animationUp();
    this.animationOpacityClose();
    setTimeout(() => {
      this.setData({
        layout: false,
        wrapper: 'wrapper'
      });
    }, 1000)
  },
  onTapMeal(options) {
    this.setData({
      activeId: options.currentTarget.dataset.index
    });
    setTimeout(() => {
      this.setData({
        activeId: -1
      });
    }, 300);
    var meal = this.data.meal[options.currentTarget.dataset.index].detail;
    meal = JSON.stringify(meal);
    wx.navigateTo({
      url: './serve-detail/serve-detail?meal=' + meal
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
    return {
      path: 'pages/index/index'
    }
  }
})