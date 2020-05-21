//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    listgoods:[{
      imageSrc:"http://www.linweiqin.cn/img/banner1.jpg",
    },{
      imageSrc:"http://www.linweiqin.cn/img/banner2.jpg",
    },{
      imageSrc:"http://www.linweiqin.cn/img/banner3.jpg",
    }],
    message:[
      {"name": "分类",
        "image_src": "http://www.linweiqin.cn/img/cat1.png",
      }, {
        "name": "秒杀拍",
        "image_src": "http://www.linweiqin.cn/img/cat2.png",
      }, {
        "name": "超市购",
        "image_src": "http://www.linweiqin.cn/img/cat3.png",
      }, {
        "name": "母婴品",
        "image_src": "http://www.linweiqin.cn/img/cat4.png",
      }, {
        "name": "母婴品",
        "image_src": "http://www.linweiqin.cn/img/cat5.png",
      }],
      goodName:"时尚服装",
      footData:[
        {
          "imgSrc": "http://www.linweiqin.cn/img/floor1.jpg",
        },
        {
          "imgSrc": "http://www.linweiqin.cn/img/floor2.jpg",
        },
        {
          "imgSrc": "http://www.linweiqin.cn/img/floor3.jpg",
        },
        {
          "imgSrc": "http://www.linweiqin.cn/img/floor4.jpg",
        },
        {
          "imgSrc": "http://www.linweiqin.cn/img/floor5.jpg",
        },
        {
          "imgSrc": "http://www.linweiqin.cn/img/floor6.jpg",
        },
      ]
      
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
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
