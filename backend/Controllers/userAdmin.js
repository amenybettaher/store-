const model = require("../Models/userAdmin");
const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, 'secretkey', { expiresIn: '1h' });
  return token;
};

module.exports = {
  add: (req, res) => {
    let newUser = req.body;
    model.addUser(newUser, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        const token = generateToken(result.userId);
        res.json({ userId: result.userId, token });
      }
    });
  },

 

  authenticateJWT: (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
      return next();
    }

    try {
      const decoded = jwt.verify(token, 'secretkey')
      req.user = decoded
      next()
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' })
    }
  },

  login: (req, res) => {
    const loginData = req.body;
    model.login(loginData, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (result.userId) {
          const token = generateToken(result.userId);
          res.json({ userId: result.userId, token, user: result.user });
        } else {
          res.status(401).json({ message: 'Invalid credentials' });
        }
      }
    });
  },


  getUserByemail: (req, res) => {
    const email = req.params.email; // Assuming you're getting email from the request parameters
    model.getUserByemail(email, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (result.length === 0) {
          res.status(404).json({ message: "User not found" });
        } else {
          res.json(result[0]);
        }
      }
    });
  },
  
  getAllUsers: (req, res) => {
    model.getAllUsers((err, result) => {
      if (err) {
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.status(200).json(result);
      }
    });
  },
};
