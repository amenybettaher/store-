const con = require ('../database/index')







const getbyone = (name, callback) => {
  const q = 'SELECT * FROM `article` WHERE name = ?';
  con.query(q, [name], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const getByCategory = (category, callback) => {
  const q = 'SELECT * FROM `article` WHERE category = ?';
  con.query(q, [category], (err, result) => {
      if (err) {
          callback(err, null);
      } else {
          callback(null, result);
      }
  });
};


const add = ( Newdata  , callback) =>{
  const q = 'INSERT INTO `article` (image,name,description,price,product_Num,category) VALUES  (?,?,?,?,?,?) '
  const {image,name,description,price,product_Num,category} = Newdata
    con.query(q, [image,name,description,price,product_Num,category],(err,result)=>{
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
    const q = 'UPDATE `article` SET image=?, name=?, description=?, price=? ,product_Num=?, category=? WHERE id=?';
    const { image, name, description, price ,product_Num ,category} = updatedData;
    con.query(q, [image, name, description, price, product_Num , articleId,category], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};



  module.exports = {
    add , deleteA , update , getbyone , getByCategory
  }