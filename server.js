const express = require('express');
const server = express();
const helmet = require('helmet');

const CohortRouter = require('./data/cohort/cohortRouter.js');
const StudentRouter = require('./data/student/studentRouter.js');

server.use(express.json());
server.use(helmet());
server.use('/api/cohorts', CohortRouter);
server.use('/api/students', StudentRouter);

module.exports = server;