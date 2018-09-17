const Auth = module.exports;

const { BaseError } = require('../handlers/ErrorHandler');
const Config = require('../Config');

Auth.middleware = ((req, res, next) => {
  if (Config.apiKey !== req.headers.api_key) throw new BaseError('Invalid credentials', 401);

  return next();
});
