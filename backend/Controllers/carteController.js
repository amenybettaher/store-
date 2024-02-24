

const carte = require('../Models/carteModels');



module.exports = {
   
    getAllcarte: function(req, res) {
    carte.getAll(function(err,results){
        if(err){
            res.status(500).send(err)
        }
else{
    res.json(results)
}
    })
    },
    addcarte: function(req, res) {
      var { cin, points } = req.body
      carte.add(cin, points, function(err, results){
         if(err){
          res.status(500).send(err)
         } else {
          res.json(results)
         }
      })
    },
    getOnecarte: function(req, res) {
        var w=req.params.title
        carte.getOne(w,(err,results)=>{
            if(err)
                res.status(500).send(err)
            
        
            else
                res.status(201).json(results)
            
        })
    },
    update:(req, res) => {
        var x = req.body
        var y = req.params.cin
      

        carte.updatePoints(x, y, function (err, results) {

          if (err) {
            res.status(500).send(err)
          } else {
            res.json(results)
          }
        })
        },
        
        supp:(req, res) => {
          var cin = req.params.cin
          

            carte.deleteBycin( id, function (err, results) {
              if (err) {

                res.status(500).send(err)
              } else {
                res.json(results)
              }
            })
            },
}