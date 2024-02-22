const con = require ('../database/index.js')


const add = ( Newdata  , callback) =>{
    const q = 'INSERT INTO `article` (image,name,description,price) VALUES  (?,?,?,?) '
    const {image,name,description,price} = Newdata
    con.query(q, [image,name,description,price],(err,result)=>{
      if(err) 
        
            return     callback(err,null)
      
      else { 
        callback(null , result)
      }
    })
  }

  const deleteA = (articleId, callback) => {
    const q = 'DELETE FROM `article` WHERE id = ?';
    con.query(q, [articleId], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};

const update = (articleId, updatedData, callback) => {
    const q = 'UPDATE `article` SET image=?, name=?, description=?, price=? WHERE id=?';
    const { image, name, description, price } = updatedData;
    con.query(q, [image, name, description, price, articleId], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};



  module.exports = {
    add , deleteA , update
  }