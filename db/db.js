const knex = require('knex');
const knexfile = require('./knexfile');

// in prod you would use dependency injection
// use env vars

const db = knex(knexfile.development);

module.exports = db;
