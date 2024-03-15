<<<<<<< HEAD
const express = require('express');
const cors = require('cors');
const carteRoutes = require('./Routes/carteRoutes');
const userRoutes = require('./Routes/user');
const articleRoutes = require('./Routes/article');
const iframeRoutes = require('./Routes/iframe');
const walletRoutes = require('./Routes/wallet');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.use('/carte', carteRoutes)
app.use('/users', userRoutes);
app.use('/article', articleRoutes);
app.use('/iframe', iframeRoutes);
app.use('/wallet', walletRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
=======
const express = require('express')
const cors = require('cors')
const carteRoutes  = require('./Routes/carteRoutes')
const app = express()
const PORT = 8000
const userRoutes = require('../backend/Routes/user');
const articleRoutes = require('./Routes/article')
const iframe = require('./Routes/iframe')
const walletRoutes = require ('./Routes/wallet')
const admin = require ('./Routes/userAdmin')

app.use(cors())
app.use(express.json())


app.use('/carte', carteRoutes);
app.use('/users', userRoutes)
app.use('/article', articleRoutes)
app.use('/iframe', iframe)
app.use('/wallet', walletRoutes);
app.use('/admin',admin)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
>>>>>>> df5ddae4ecf13a9eec67674c038410f92ec3fc44
