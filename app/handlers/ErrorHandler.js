const ErrorHandler = module.exports;

ErrorHandler.handler = (err, req, res, next) => {
  if (err instanceof ErrorHandler.BaseError) {
    return res.status(err.status).send(err.message);
  }

  return next(err);
};

ErrorHandler.BaseError = function BaseError(message, status) {
  this.message = message;
  this.status = status;
  this.stack = new Error().stack;
};
