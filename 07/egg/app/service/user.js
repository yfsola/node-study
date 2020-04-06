'use strict';

const Service = require('egg').Service;
class UserService extends Service {
  async getAll() {
    // return [
    //   {name:'tom service'},
    //   {name: 'jerry service'}
    // ]
    //调用数据库中的数据
    const User = this.ctx.model.User
    await User.sync({force: true})
    await User.create({
      name: 'sola from sql'
    })
    return await User.findAll()
  }
}

module.exports = UserService;