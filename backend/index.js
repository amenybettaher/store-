const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 8000;




app.use(cors())
app.use(express.json())







app.listen(PORT, () => {
      console.log(`listen on http://localhost:${PORT}`);
});