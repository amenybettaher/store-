const express = require("express");
const router = express.Router();
const {addArticle  , deleteArticle , updateArticle} =require('../Controllers/article')


router.post("/post",addArticle)
router.delete("/delete/:id", deleteArticle)
router.put("/update/:id",updateArticle)

module.exports=router; 