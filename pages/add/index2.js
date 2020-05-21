// pages/index2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    texts: [
      '2011年1月，&nbsp;微信1.0发布。',
      '同年5月，微信2.0语音对讲发布，',
      '10月，微信3.0新增摇一摇功能，',
      '2012年3月，微信用户突破1亿，',
      '4月份，微信4.0朋友圈发布，',
      '同年7月，微信4.2发布公众平台,',
      '2013年8月，微信5.0发布微信支付,',
      '2014年9月，企业号发布,',
      '同月，发布微信卡包,',
      '2015年1月，微信第一条朋友圈广告,',
      '2016年1月，企业微信发布,',
      '2017年1月，小程序发布,',
      '......'
    ],
    //设定一个参数等待传入数据
   
    //设定初始值下标方便一会儿调用上面的数据
    text:"",
    index:0,
    //设定一个值来接即将增加的数据

  },
  // 添加一个按钮绑定的点击事件
  addMessage:function(){

    //获取元素后
    let txt = this.data.text
    //值才是可++,不然拿到的是对象
    //不可以直接
    //this.data.text = text
    let i = this.data.index++

    let txt1 = this.data.texts
    //添加逻辑代码
    if(i < txt1.length){
      txt += txt1[i]
    }
    //重置参数
    this.setData(
      {
        text:txt
      }
    )

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

  }
})