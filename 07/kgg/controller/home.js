module.exports = app => ({
  index: async ctx => {
    const name = await app.$service.user.getName()
    app.ctx.body = '首页 用户名字： ' + name
  },
  detail: ctx => {
    app.ctx.body = '详情页面'
  }
})