const carte = require('../Models/carteModels')


module.exports = {
  getAllcarte: function (req, res) {
    carte.getAll(function (err, results) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.json(results)
      }
    })
  },

  getOnecarteByCode: function (req, res) {
    var code = req.params.code
    carte.getOneByCode(code, (err, results) => {
      if (err) res.status(500).send(err)
      else res.status(201).json(results)
    })
  },

  getOnecarteByNumber: function (req, res) {
    var number = req.params.number
    carte.getOneByNumber(number, (err, results) => {
      if (err) res.status(500).send(err)
      else res.status(201).json(results)
    })
  },
}