const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 8000;
const articleRoutes = require('./Routes/article')




app.use(cors())
app.use(express.json())


app.use('/article', articleRoutes)







app.listen(PORT, () => {
      console.log(`listen on http://localhost:${PORT}`);
});