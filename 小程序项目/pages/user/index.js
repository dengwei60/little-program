// pages/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      nickName:""
    }
  },
  // 按钮拿到的一个事件
  getUserInfo:function(e){
    // 打印看一下能得到什么
    console.log(e)
    //本地存储好这个数据
    wx.setStorageSync('userInfo', e.detail.userInfo)
    // 再将数据赋值给要拿到的上面的数据
    this.setData({
      userInfo:e.detail.userInfo
    })

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
   * 第二部的时候直接拿到这个值
   */
  onShow: function () {
    let userInfo=wx.getStorageSync('userInfo')
    this.setData({
      userInfo:userInfo
    })
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