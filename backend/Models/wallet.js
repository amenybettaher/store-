const con = require('../database/index');

const getAll = (callback) => {
  const q = 'SELECT * FROM `wallet`';
  con.query(q, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const getbyone = (id, callback) => {
    const q = 'SELECT * FROM `wallet` WHERE id = ?';
    con.query(q, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  };

const add = (Newdata, callback) => {
  const q = 'INSERT INTO `wallet` (image, name, price) VALUES (?, ?, ?)';
  const { image, name, price } = Newdata;
  con.query(q, [image, name, price], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const deleteA = (walletId, callback) => {
  const q = 'DELETE FROM `wallet` WHERE id = ?';
  con.query(q, [walletId], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports = { getAll, add, deleteA, getbyone };
