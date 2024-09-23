// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    users: [
      { name: "Alice", age: 30, registration_time: "2023-09-01" },
      { name: "Bob", age: 25, registration_time: "2023-09-05" },
      { name: "Charlie", age: 35, registration_time: "2023-08-21" }
    ]
  },

  back:function (params) {
    wx.navigateBack({
      delta:1
    })
  },
  test1(e) {
    const name = e.currentTarget.dataset.name; // 获取 data-name 的值
    console.log("用户名:", name); // 输出用户名到控制台
    wx.navigateTo({
      url: `../details/details?name=${name}`,
    })
  },
  test2(e) {
    const age = e.currentTarget.dataset.name; // 获取 data-name 的值
    console.log("年龄:", age); // 输出用户名到控制台
    wx.navigateTo({
      url: '../record/record',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})