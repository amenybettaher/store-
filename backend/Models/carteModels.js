const connection = require('../database/index');

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
};