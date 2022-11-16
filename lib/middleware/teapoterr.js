module.exports = (req, res, next) => {
  const err = new Error('I am teapot, not short nor stout');
  err.status = 418;
  next(err);
};
