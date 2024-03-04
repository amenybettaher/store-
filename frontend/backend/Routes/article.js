const express = require("express");
const router = express.Router();
const {addArticle  , deleteArticle , updateArticle , getbycode ,  getByCategoryHandler} =require('../Controllers/article')


router.post("/post",addArticle)
router.delete("/delete/:id", deleteArticle)
router.put("/update/:id",updateArticle)
router.get('/get/:code', getbycode)
router.get('/getByCategory/:category', getByCategoryHandler);

module.exports=router; 