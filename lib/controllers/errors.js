const { Router } = require('express');
// const error = require('../middleware/error.js');
// const notFound = require('../middleware/not-found.js');

module.exports = Router()
  .get('/teapot', (req, res, next) => {
    next({ status: 418, message: 'I am a teapot' });
  })

  .get('/payment', (req, res, next) => {
    next({ status: 402, message: 'Payment required' });
  });
