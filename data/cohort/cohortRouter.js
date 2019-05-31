const express = require('express');
const router = express.Router();
const knex = require('knex');

const knexConfig = require('../../knexfile.js');
const db = knex(knexConfig.development);

module.exports = router;