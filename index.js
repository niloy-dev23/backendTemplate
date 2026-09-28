const express = require('express');
const router = express.Router()
const app = express()
const port = 8000
const dns = require('node:dns')
dns.setServers(['8.8.8.8','1.1.1.1'])

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})