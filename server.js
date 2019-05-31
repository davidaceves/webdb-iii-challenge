const express = require('express');
const server = express();

// const CohortRouter = require('./users/userRouter.js');
// const StudentRouter = require('./posts/postRouter.js');

server.use(express.json());

module.exports = server;