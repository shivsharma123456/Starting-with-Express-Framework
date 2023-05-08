const path = require('path');
const express = require('express');
const rootDir=require('../util/path');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, '..', 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body); // assuming you have middleware set up to parse the request body
  res.redirect('/');
});

module.exports = router;