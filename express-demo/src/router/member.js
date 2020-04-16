const express = require('express')
const router = express.Router()

router.get('/list', (req, res) => {
  res.json({
    list: [
      {
        name: '张三',
        age: 16
      },
      {
        name: '李四',
        age: 20
      }
    ],
    code: 200,
    message: '请求成功'
  })
})

module.exports = router
