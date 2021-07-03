const express = require('express')
const app = express()
const port = 8090

app.get('/', (req, res) => {
  res.send('你好 r-boot')
})

app.listen(port, () => console.log(`r-boot-server 服务器 localhost:${port} 已启动`))
