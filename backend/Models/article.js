 const con = require ('../database/index')
const getAll = (callback) => {
  const q = 'SELECT * FROM `article`';
  con.query(q, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const getbyone = (code, callback) => {
  const q = 'SELECT * FROM `article` WHERE code = ?';
  con.query(q, [code], (err, result) => {
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


const add = (Newdata, callback) => {
  const q = 'INSERT INTO `article` (code, image, name, description, price, product_Num, category, rayon, etage) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const { code, image, name, description, price, product_Num, category, rayon, etage } = Newdata;
  con.query(q, [code, image, name, description, price, product_Num, category, rayon, etage], (err, result) => {
    if (err)
      return callback(err, null);
    else {
      callback(null, result);
    }
  });
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
  const q = 'UPDATE `article` SET image=?, code=?, description=?, price=?, product_Num=?, category=?, rayon=?, etage=? WHERE id=?';
  const { image, code, description, price, product_Num, category, rayon, etage } = updatedData;
  con.query(q, [image, code, description, price, product_Num, category, rayon, etage, articleId], (err, result) => {
      if (err) {
          callback(err, null);
      } else {
          callback(null, result);
      }
  });
};


  module.exports = {getAll,
    add , deleteA , update , getbyone , getByCategory
  }