const express = require('express')
// 创建express的一个实例
const app = express()

const skuRouter = require('./router/sku')
const memberRouter = require('./router/member')

app.use('/member', memberRouter)
app.use('/sku', skuRouter)

// app.use((req, res) => {
//   res.json({
//     name: '章三'
//   })
// })

// app.get('/user', (req, res) => {
//   res.send('tom')
// })

// app.post('/user/:age', (req, res) => {
//   console.log(req.params)
//   const { age } = req.params
//   res.send({
//     name: 'tom',
//     age
//   })
// })

app.listen(3000, '127.0.0.1', () => {
  console.log('服务启动成功')
})
