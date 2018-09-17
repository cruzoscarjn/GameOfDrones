const mainModule = module.exports;

require('dotenv').config();
const express = require('express');
const Config = require('./app/Config');
const Routes = require('./app/Routes');
const ErrorHandler = require('./app/handlers/ErrorHandler');
const Auth = require('./app/middleware/Auth');
const Cors = require('./app/middleware/Cors');

const app = express();

app.use(Cors.middleware);
app.use(Auth.middleware);
app.use(express.json());
app.use('/api', Routes);
app.use(ErrorHandler.handler);

mainModule.appStarted = app.listen(Config.port, () => {
  console.log(`Game of drones server started on port: ${Config.port}`);

  return Promise.resolve(app);
});

