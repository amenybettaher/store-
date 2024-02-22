const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 8000;
const userRoutes = require('../backend/Routes/user');




app.use(cors())
app.use(express.json())

app.use('/users', userRoutes)






app.listen(PORT, () => {
      console.log(`listen on http://localhost:${PORT}`);
});