const cors = module.exports;

// only for testing purposes

cors.middleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, api_key');

  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
};
