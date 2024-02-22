const express = require('express')
const app = express()
const cors = require("cors")
const PORT = 8000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {

  res.send('<h1>💳hello group codeBare🛒</h1>')
  
})

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
