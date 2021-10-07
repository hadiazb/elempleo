const setCache = (req, res, next) => {
  const period = 1000000000;
  if (req.method === 'GET') {
    console.log('entro');
    res.set('Cache-control', 'public');
  } else {
    res.set('Cache-control', 'no-store');
  }
  console.log('no entro');
  next();
};

module.exports = setCache;
