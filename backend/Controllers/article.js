const {   add , deleteA , update}  = require('../Models/article');


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
 
module.exports = {
  addArticle  , deleteArticle , updateArticle
};