//new messgae route
const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
  res.render('partials/form');
});

module.exports = router;