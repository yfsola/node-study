const Koa = require('koa')
const router = require('koa-router')()
const session = require('koa-session')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const app = new Koa();

//配置session的中间件
app.use(cors({
  credentials: true
}))
app.keys = ['some secret'];

app.use(static(__dirname + '/'));
app.use(bodyParser())
app.use(session(app));

app.use((ctx, next) => {
  console.log(ctx.url,'url')
  if(ctx.url.indexOf('login') > -1) {
    next()
  } else {
    console.log('session',ctx.session.userinfo)
    if(!ctx.session.userinfo) {
      ctx.body = {
        message:'登录失败'
      }
    } else {
      next()
    }
  }
})

router.post('/users/login', async (ctx) => {
  const {body} = ctx.request
  //设置session
  ctx.session.userinfo = body.username
  console.log(ctx.session.userinfo,'userinfo')
  ctx.body = {
    message: '登录成功'
  }
})

router.post('/users/logout', async (ctx) => {
  delete ctx.session.userinfo
  ctx.body = {
    message: '登出系统'
  }
})

router.get('/users/getUser', async (ctx) => {
  ctx.body = {
    message: '获取数据成功',
    userinfo: ctx.session.userinfo
  }
})

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);