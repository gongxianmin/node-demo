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

function demo_middreware(req, res, next) {
  try {
    // 数据库操作 
  } catch (error) {
    next(error)
  }
  // Promise.then().catch(next) tips: 异常一定是 收口的
}



function error_handle_middle(err, req, res, next) {
  if (err) {
    res.status(500).json({
      msg: err.message || '服务器异常'
    })
  } else {
    next()
  }
}

// 404
function not_found_middleware(req, res, next) {
  res.json({
    msg: 'api不存在'
  })
}

app.get('/err', (req, res, next) => {
  throw new Error('服务器错误')
})
app.use(logMiddleware)
app.use(loginRouter)
app.use(not_found_middleware)
app.use(error_handle_middle)

// app.get('/test', (req, res) => {
//   res.json({
//     code: 200,
//     msg: '成功'
//   })
// })

app.listen(3000, () => {
  console.log('服务启动成功')
})
