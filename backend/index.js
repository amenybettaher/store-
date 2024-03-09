const express = require('express')
const cors = require('cors')
const carteRoutes  = require('./Routes/carteRoutes')
const app = express()
const PORT = 8000
const userRoutes = require('../backend/Routes/user');
const articleRoutes = require('./Routes/article')
const walletRoutes = require ('./Routes/wallet')


app.use(cors())
app.use(express.json())


app.use('/carte', carteRoutes);
app.use('/users', userRoutes)
app.use('/article', articleRoutes)
app.use('/wallet', walletRoutes);


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})