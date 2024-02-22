const express = require('express');
const { getAllcarte, getOnecarte, fassakh, update, addcarte } = require('../controllers/carteController');
const router = express.Router();







router.get('/get', getAllcarte);
router.post('/add',addcarte)
router.put('/put/:cin',update)
router.delete('/delete/:id',fassakh)
module.exports=router