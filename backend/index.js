const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 8000;
const userRoutes = require('../backend/Routes/user');
const articleRoutes = require('./Routes/article')




app.use(cors())
app.use(express.json())

app.use('/users', userRoutes)

app.use('/article', articleRoutes)







app.listen(PORT, () => {
      console.log(`listen on http://localhost:${PORT}`);
});