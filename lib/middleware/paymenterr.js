module.exports = (req, res, next) => {
  const err = new Error('Pay THEM');
  err.status = 402;
  next(err);
};
