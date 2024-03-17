
const connection = require('../database/index.js'); 

module.exports = {
  getAll: (callback) => {
    const sql = 'SELECT * FROM `carte`';
    connection.query(sql, (error, results) => {
      callback(error, results);
    });
  },

  getOneByCode: (code, callback) => {
    const sql = 'SELECT * FROM `carte` WHERE `code`=?';
    connection.query(sql, [code], (error, results) => {
      callback(error, results);
    });
  },

  getOneByNumber: (number, callback) => {
    const sql = 'SELECT * FROM `carte` WHERE `number`=?';
    connection.query(sql, [number], (error, results) => {
      callback(error, results);
    });
  },

  add: (carteData, callback) => {
    const sql = 'INSERT INTO `carte` SET ?';
    connection.query(sql, carteData, (error, results) => {
      callback(error, results);
    });
  },

    updateById: (id, newData, callback) => {
      const sql = 'UPDATE `carte` SET ? WHERE `id`=?';
      connection.query(sql, [newData, id], (error, results) => {
        callback(error, results);
      });
    },
  
    deleteById: (id, callback) => {
      const sql = 'DELETE FROM `carte` WHERE `id`=?';
      connection.query(sql, [id], (error, results) => {
        callback(error, results);
      });
    }
  };
