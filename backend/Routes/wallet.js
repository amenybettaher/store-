const express = require("express");
const router = express.Router();
const { getAllwallet, addWallet, deleteWallet, getbycode } = require('../Controllers/wallet');

router.post("/add", addWallet);
router.delete("/:id", deleteWallet);
// router.get('/:code', getbycode);
router.get('/getAll', getAllwallet);

module.exports = router;
