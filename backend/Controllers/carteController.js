const carte = require('../Models/carteModels');


module.exports = {
  getAllcarte: function (req, res, next) {
    carte.getAll(function (err, results) {
      if (err) {
        return next(err);
      } else {
        res.json(results);
      }
    });
  },

  getOnecarteByCode: function (req, res) {
    var code = req.params.code;
    carte.getOneByCode(code, (err, results) => {
      if (err) res.status(500).send(err);
      else res.status(200).json(results);
    });
  },

  getOnecarteByNumber: function (req, res) {
    var number = req.params.number;
    carte.getOneByNumber(number, (err, results) => {
      if (err) res.status(500).send(err);
      else res.status(200).json(results);
    });
  },

  addCarte: function (req, res) {
    const { points, code, number } = req.body;
    
  
    if (!points || !code || !number) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const carteData = { points, code, number };

    carte.add(carteData, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).json(results);
      }
    });
  },

  updateCarte: function (req, res) {
    var id = req.params.id;
    var newData = req.body;
    carte.updateById(id, newData, (err, results) => {
      if (err) res.status(500).send(err);
      else res.status(200).json(results);
    });
  },

  deleteCarte: function (req, res) {
    var id = req.params.id;
    carte.deleteById(id, (err, results) => {
      if (err) res.status(500).send(err);
      else res.status(200).json(results);
    });
  }
};
