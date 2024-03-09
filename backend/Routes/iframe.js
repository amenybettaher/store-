const express = require('express');
const router = express.Router();

router.get('/*', (req, res) => {
  const url = req.params[0] + (req.url.includes('?') ? '?' + req.url.split('?')[1] : '');
  console.log(url);
  res.send(`
    <iframe src="https://${url}" width="100%" height="100%"></iframe>
  `);
});

module.exports = router;







