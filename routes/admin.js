const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send(`
    <form action="/admin/add-product" method="POST">
      <input type="text" name="title">
      <button type="submit">Submit</button>
    </form>
  `);
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body); // assuming you have middleware set up to parse the request body
  res.redirect('/');
});

module.exports = router;
