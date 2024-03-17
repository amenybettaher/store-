const express = require('express')
const { getAllcarte, getOnecarteByCode, getOnecarteByNumber, addCarte, updateCarte, deleteCarte } = require('../Controllers/carteController')
const router = express.Router()

router.get('/all', getAllcarte)
router.get('/code/:code', getOnecarteByCode)
router.get('/number/:number', getOnecarteByNumber)

router.post('/add', addCarte)

router.put('/:id', updateCarte)

router.delete('/:id', deleteCarte)

module.exports = router
