module.exports = app => {
  const {STRING,CHAR} = app.Sequelize;

  const User = app.model.define(
    'user',
    {name: CHAR(30)},
    {timestamps: false}
  );

  //数据库同步
  User.sync({force: true})
  return User
}