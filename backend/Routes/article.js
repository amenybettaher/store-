const express = require("express");
const router = express.Router();
const {addArticle  , deleteArticle , updateArticle , getbyname ,  getByCategoryHandler} =require('../Controllers/article')


router.post("/post",addArticle)
router.delete("/delete/:id", deleteArticle)
router.put("/update/:id",updateArticle)
router.get('/get/:name', getbyname)
router.get('/getByCategory/:category', getByCategoryHandler);

module.exports=router; 