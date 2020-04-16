const express = require('express')
const router = express.Router()

router.get('/list', (req, res) => {
  res.json({
    list: [
      {
        color: '黑色',
        price: 200
      },
      {
        color: '银色',
        price: 400
      }
    ],
    code: 200,
    message: '请求成功'
  })
})

module.exports = router
