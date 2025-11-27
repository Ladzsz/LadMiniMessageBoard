//new message route
const express = require('express');
const router = express.Router();

//get request to render the form
router.get('/new', (req, res) => {
  res.render('partials/form');
});

module.exports = router;