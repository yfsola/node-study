const http = require('http')
const session = {}
http.createServer((req,res) => {
  if(req.url === '/favicon.ico') {
    res.end('')
    return
  }

  //检查cookie
  console.log('cookie',req.headers.cookie)

  //设置cookie
  // res.setHeader('Set-Cookie','co0kie1=abc')
  // res.end('hello cookie')

  const sessionKey = 'sid'
  const cookie = req.headers.cookie
  if(cookie && cookie.indexOf(sessionKey) > -1) {
    res.end('come back')
    const  pattern = new RegExp(`${sessionKey}=([^;]+);?\s*`)
    const sid = pattern.exec(cookie)[1]
    console.log('session',sid,session,session[sid])
  } else {
      const sid = (Math.random() * 9999999).toFixed()
      //设置cookie
      res.setHeader('Set-Cookie', `${sessionKey}=${sid}`)
      session[sid] = {name: 'laowang'}
      console.log('session---ssss',session)
      res.end('hello')
  }

}).listen(3000)