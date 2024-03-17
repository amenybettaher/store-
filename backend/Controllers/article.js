const {  getAll, add , deleteA , update , getbyone , getByCategory}  = require('../Models/article');
const getAllArticle = (req, res) => {
    
    getAll((err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (result.length === 0) {
                res.status(404).send("Article not found"); 
            } else {
                res.status(200).json(result);
            }
        }
    });
};
const getbycode = (req, res) => {
    const code = req.params.code; 
    getbyone(code, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (result.length === 0) {
                res.status(404).send("Article not found"); 
            } else {
                res.status(200).json(result);
            }
        }
    });
};
const getByCategoryHandler = (req, res) => {
    const category = req.params.category;
    getByCategory(category, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (result.length === 0) {
                res.status(404).send("No articles found for the specified category.");
            } else {
                res.status(200).json(result);
            }
        }
    });
};


const addArticle = (req, res) => {
    const Newdata = req.body;
    add(Newdata, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json(result);
        }
    });
};


const deleteArticle = (req, res) => {
    const articleId = req.params.id;
    deleteA(articleId, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
};

const updateArticle = (req, res) => {
    const articleId = req.params.id;
    const updatedData = req.body;
    update(articleId, updatedData, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
};
 
module.exports = {getAllArticle,
  addArticle  , deleteArticle , updateArticle , getbycode ,  getByCategoryHandler
};
