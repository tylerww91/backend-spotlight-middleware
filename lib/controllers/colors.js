const { Router } = require('express');
const blue = require('../middleware/blue.js');
const colors = require('../middleware/colors.js');
const red = require('../middleware/red.js');
const yellow = require('../middleware/yellow.js');

// what middleware does this route need to pass?
module.exports = Router()
  .get('/purple', [colors, red, blue], (req, res) => {
    res.json(req.colors);
  })

  .get('/orange', [colors, red, yellow], (req, res) => {
    res.json(req.colors);
  })

  .get('/green', [colors, yellow, blue], (req, res) => {
    res.json(req.colors);
  })

  .get('/red-orange', [colors, red, red, yellow], (req, res) => {
    res.json(req.colors);
  })

  .get('/blue-green', [colors, blue, blue, yellow], (req, res) => {
    res.json(req.colors);
  });
