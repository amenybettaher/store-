const express = require('express');
const { getAllcarte, getOnecarte, supp, update, addcarte } = require('../controllers/carteController');
const router = express.Router();



router.get('/get', getAllcarte);
router.post('/add', addcarte);
router.put('/put/:cin', update);
router.delete('/delete/:cin', supp);




module.exports = router;
