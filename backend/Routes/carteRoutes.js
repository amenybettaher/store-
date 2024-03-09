const express = require('express')
const { getAllcarte, getOnecarteByCode, getOnecarteByNumber } = require('../Controllers/carteController')
const router = express.Router()



router.get('/all', getAllcarte)
router.get('/code/:code', getOnecarteByCode)
router.get('/number/:number', getOnecarteByNumber)

module.exports = router