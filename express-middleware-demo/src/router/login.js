const express = require('express')
const router = express.Router()

// 1. 第一种场景
router.use((req, res, next) => {
  console.log('第一种场景')
  next()
})

// 2.路由内部使用
function validLoginParams(req, res, next) {
  console.log('第二种场景')
  let {name, password} = req.query
  if (!name || !password) {
    res.json({
      msg: '参数错误',
      code: 600
    })
  } else {
    next()
  }
}

router.get('/login', [validLoginParams], (req, res, next) => {
  res.json({
    code: 200,
    msg: '请求login'
  })
})

module.exports = router
