

const carte=require('../models/carteModels')



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
        var x=req.body
        carte.add(x,function(err,results){
           if(err){
            res.status(500).send(err)
           
           }
           else{
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
        var y = req.params.id
      
        carte.updateproduct(x, y, function (err, results) {
          if (err) {
            res.status(500).send(err)
          } else {
            res.json(results)
          }
        });
        },
        
        fassakh:(req, res) => {
            var id= req.params.id
          
            carte.deleteproduct( id, function (err, results) {
              if (err) {
                res.status(500).send(err)
              } else {
                res.json(results)
              }
            });
            },
}