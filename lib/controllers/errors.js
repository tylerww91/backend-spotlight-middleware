const { Router } = require('express');
const paymenterr = require('../middleware/paymenterr.js');
// const error = require('../middleware/error.js');
// const notFound = require('../middleware/not-found.js');
const teapoterr = require('../middleware/teapoterr.js');

module.exports = Router()
  .get('/teapot', [teapoterr], (req, res, next) => {
    res.json(req.body);

    next();
  })

  .get('/payment', [paymenterr], (req, res, next) => {
    res.json(req.body);
    next();
  });
