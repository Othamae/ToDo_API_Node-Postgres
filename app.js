const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 4001

app.get('/', (req, res) => {
  res.send('Hello Wordl!!')
})

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`)
})
