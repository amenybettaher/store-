const express = require('express');
const cors = require('cors');
const carte = require('./routes/carteRoutes');
const app = express();
const PORT = 8000;


app.use(cors());
app.use(express.json());


app.use('/api/carte', carte);


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})