const express = require('express')
const app = express()
const port = 3000

// 라우팅 설정
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})