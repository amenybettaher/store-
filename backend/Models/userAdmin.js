const connection = require("../database/index");
const jwt = require('jsonwebtoken');

// Function to generate a JWT token
const generateToken = (userId) => {
      const token = jwt.sign({ userId }, 'yourSecretKey', { expiresIn: '1h' });
      return token;
};

module.exports = {
      addUser: (newUser, callback) => {
            const sql = "INSERT INTO userad SET username=?,birth=?, email=?, password=?";
            connection.query(sql, [newUser.username,newUser.birth, newUser.email, newUser.password], (err, result) => {
                  if (err) {
                        callback(err, null);
                  } else {
                        const userId = result.insertId;
                        const token = generateToken(userId);
                        callback(null, { userId, token });
                  }
            });
      },

      login: (data, callback) => {
            const sql = "SELECT * FROM userad WHERE email=? AND password=?";
            connection.query(sql, [data.email, data.password], (err, result) => {
                  if (err) {
                        callback(err, null);
                  } else {
                        if (result.length > 0) {
                              const user = result[0];
                              const userId = user.id;
                              const token = generateToken(userId);
                              callback(null, { userId, token, user });
                        } else {
                              callback(null, { userId: null, token: null, user: null });
                        }
                  }
            });
      },

  

      getUserByemail: (email, callback) => {
            const sql = "SELECT * FROM userad WHERE email=?";
            connection.query(sql, [email], (err, result) => {
              callback(err, result);
            });
          },
          
 
};
