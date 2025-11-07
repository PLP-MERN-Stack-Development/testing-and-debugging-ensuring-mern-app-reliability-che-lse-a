module.exports = (err, req, res, next) => {
  console.error('Server error:', err && err.stack ? err.stack : err);
  if (res.headersSent) return next(err);
  res.status(500).json({ message: 'Internal Server Error' });
};
