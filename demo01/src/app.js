const http = require('http')
const server = http.createServer((req, res) => {
  res.end('hello node11')
})
server.listen(3000, '127.0.0.1', () => {
  console.log('server 启动成功')
})

// 配置nodemon
// 1. yarn add nodemon -D 或者 npm install nodemon -D
// 2. 修改package.json 的启动命令
// 3. 增加nodemon.json文件配置nodemon监听的选项(配置完成要重新启动才能生效)
// 4. 添加debug
