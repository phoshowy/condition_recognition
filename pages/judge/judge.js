Page({
  data: {
    id: ''  // 用于存储用户输入
  },

  // 监听输入
  bindIdInput: function (e) {
    this.setData({
      id: e.detail.value  // 存储用户输入的手机号码
    });
  },

  // 提交并进行号码查询
  submit: function () {
    const that = this;
    const id = this.data.id;

    // 模拟数据库中的数据
    const database = ['110', '120', '119']; // 假设的数据库数据

    // 检查手机号是否在数据库中
    if (database.includes(id)==0) {
      // 如果号码不存在于数据库中，跳转到页面1并带着数据
      wx.navigateTo({
        url: `../personal_information/personal_information?id=${id}`,
      });
      console.log("unexisted number"+id)
    }
    // else {
    //   // 如果号码存在于数据库中，跳转到页面2并带着手机号，后期进行数据库查找，绑定身份证，录入信息
    //   wx.navigateTo({
    //     url: `/pages/page2/page2?phone=${phone}`
    //   });
    // }
  }
})
