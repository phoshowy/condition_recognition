// pages/personal_information/personal_information.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
 id:''
  },
  next:function (params) {
    wx.navigateTo({
      url: '../record/record',
    })
  },
back:function (params) {
  wx.navigateBack({
    delta:1
  })
},
onSubmit:function (e) {
  console.log("上传信息")
  //获取姓名、年龄、联系方式
  var username = e.detail.value['username'];
  var age = e.detail.value['age'];
  var phone = e.detail.value['phone'];
  var gender = e.detail.value['gender']
console.log(username,age,phone,gender)
  
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      id: options.id || ''  // 如果没有传递号码，默认值为空
    });
    console.log(111+options.id)
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