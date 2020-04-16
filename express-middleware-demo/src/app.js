const express = require('express')
const app = express()

const loginRouter = require('./router/login')

function logMiddleware(req, res, next) {
  console.log('请求来了。。。。')
  next()
}

// 中间件
// 1. 是一个完整的函数
// 2. err, req, res, next --> function

function demoMiddleware(err, req, res, next) {
  // 1. 异常
  // 2. 处理业务功能，转交控制权 next
  // 3. 响应请求--结束响应-->当作路由处理函数
}
app.use(logMiddleware)
app.use(loginRouter)

// app.get('/test', (req, res) => {
//   res.json({
//     code: 200,
//     msg: '成功'
//   })
// })

app.listen(3000, () => {
  console.log('服务启动成功')
})
