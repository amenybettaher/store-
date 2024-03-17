const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user');

router.get('/get/:email', userController.getUserByEmail);
router.get('/get', userController.getUsers);
router.post('/login', userController.loginUser);
router.post('/register', userController.addUser);
router.delete('/delete/:email', userController.deleteUser);
router.put('/update/:email', userController.updateUser);

module.exports = router;

