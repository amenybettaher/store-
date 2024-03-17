const { getAll, add, deleteA, getbyone } = require('../Models/wallet');
const getAllwallet = (req, res) => {
    getAll((err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    });
  };
  
const getbycode = (req, res) => {
  const code = req.params.code;
  getbyone(code, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (result.length === 0) {
        res.status(404).send("Wallet not found");
      } else {
        res.status(200).json(result);
      }
    }
  });
};

const addWallet = (req, res) => {
  const Newdata = req.body;
  add(Newdata, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(result);
    }
  });
};

const deleteWallet = (req, res) => {
  const walletId = req.params.id;
  deleteA(walletId, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
};

module.exports = { getAllwallet, addWallet, deleteWallet, getbycode };
