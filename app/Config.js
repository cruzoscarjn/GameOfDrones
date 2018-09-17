
const Config = module.exports;

const assert = require('assert');

assert(process.env.PORT, 'PORT is required');
assert(process.env.API_KEY, 'API_KEY is required');

Config.port = process.env.PORT;
Config.apiKey = process.env.API_KEY;
