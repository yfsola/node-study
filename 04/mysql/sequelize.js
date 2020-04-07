(async ()  => {
  const Sequelize = require('sequelize');

  const sequelize = new Sequelize('kaikeba','root','password',{
    host: 'localhost',
    dialect: 'mysql'
  })

  //定义模型
  const Fruit =  sequelize.define('Fruit', {
    //自定义主键
    // id: {
    //   type: Sequelize.DataTypes.UUID,
    //   defaultValue: Sequelize.DataTypes.UUIDV1,
    //   primaryKey: true
    // },
    name: {type: Sequelize.STRING(20),allowNull: false},
    price: {type: Sequelize.FLOAT,allowNull: false},
    stock: {type: Sequelize.INTEGER,defaultValue:0,allowNull: false}
  })

  let ret = await Fruit.sync()
  ret = await Fruit.create({
    name: '香蕉',
    price: 3.5
  })
  console.log('create:',ret)

  ret = await Fruit.update({
    price: 4
  },{
    where: {name: '香蕉'}
  })

  const Op = Sequelize.Op
  ret = await Fruit.findAll({
    where: {price:{[Op.lt]:5,[Op.gt]:2}}
  })
  console.log('select:',JSON.stringify(ret))
})()