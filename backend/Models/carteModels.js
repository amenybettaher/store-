const connection = require('../database/index')

module.exports = {
  getAll: function (callback) {
    const sql = 'SELECT * FROM `carte`'
    connection.query(sql, function (error, results, fields) {
      callback(error, results)
    })
  },
  getOne: function (cin, callback) {
    const sql = 'SELECT * FROM `carte` WHERE `cin`=?'
    connection.query(sql, [cin], function (error, results) {
      callback(error, results)
    })
  },
  add: function (cin, points, callback) {
    const sql = 'INSERT INTO `carte` (`cin`, `points`) VALUES (?, ?)'
    connection.query(sql, [cin, points], function (error, results) {
      callback(error, results)
    })
  },
  updatePoints: function (points, cin, callback) {
    const sql = 'UPDATE `carte` SET `points`=? WHERE `cin`=?'
    connection.query(sql, [points, cin], function (error, results) {
      callback(error, results)
    })
  },
  deleteBycin: function (cin, callback) {
    const sql = 'DELETE FROM `carte` WHERE `cin`=?'
    connection.query(sql, [cin], function (error, results) {
      callback(error, results)
    })
  },
}