const express = require('express')
const cors = require('cors')
const carte = require('./Routes/carteRoutes')
const app = express()
const PORT = 8000
const userRoutes = require('../backend/Routes/user');
const articleRoutes = require('./Routes/article')


app.use(cors())
app.use(express.json())


app.use('/api/carte', carte)



app.use('/users', userRoutes)

app.use('/article', articleRoutes)








app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})