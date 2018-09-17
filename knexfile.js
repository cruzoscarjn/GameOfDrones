const assert = require('assert');

const { PG_CONNECTION } = process.env;

assert(PG_CONNECTION, 'PG_CONNECTION must be provided');
const maxConnectionPoolSize = process.env.CONNECTION_POOL_SIZE || 5;

module.exports = {
  client: 'pg',
  connection: PG_CONNECTION,
  pool: { min: 1, max: maxConnectionPoolSize },
  acquireConnectionTimeout: 15000,
};
