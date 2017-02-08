'use strict';

const controller = require('./controllers/index.js');
const leads = require('./initializeDB.js');
const router = require('./routes.js');
const request = require('request');
const http = require('http');

const express = require('express');
const axios = require('axios');
const path = require('path');
const port = process.env.PORT || 8080;
const morgan = require('morgan');
const parser = require('body-parser');
const expressLogging = require('express-logging');
const logger = require('logops');
const app = express();
app.use(morgan('dev'));

app.use(expressLogging(logger));
app.use(parser.json());
app.use(express.static(__dirname + '/client'));

app.use('/', router);

app.listen(port);
console.log('Server started on', port);




  // request({
  //   url: 'https://api.knack.com/v1/objects/object_1/records',
  //   type: 'POST',
  //   headers: {
  //       'X-Knack-Application-Id': '5010b4b38eed0a844c0000a9',
  //       'X-Knack-REST-API-Key': '26cb713e-a350-4139-962d-b3b75958d0d1'
  //   }, success: function(data) {
  //     alert('POSTED API RECORDS');
  //   },
  //   json: {leads: leads.pipelineLA}, function(err, response, body) {
  //     if (err) {
  //       console.log('body inside forloop', body)
  //       console.error(err);
  //     }
  //     if (response) {
  //       console.log('response', response);
  //     }
  //   }
  // });

// for (var i = 0; i < data.questions.length; i++) {
//   request({
//     method: 'POST',
//     uri: process.env.CLEARDB_DATABASE_URL+'/questions',
//     json: {
//       QuestionText1: data.questions[i].QuestionText1,
//       QuestionText2: data.questions[i].QuestionText2,
//       QuestionText3: data.questions[i].QuestionText3,
//       lessonID: data.questions[i].lessonID
//     }, function(err, response, body) {
//       if (err) {
//         console.error(err);
//         console.log(err);
//       }
//       if (response) {
//         console.log('response', response);
//       }
//     }
//   });
// }

console.log('run through seeding the db');
module.exports.app = app;



// try to find your log file with suffix ".err", there should be more info. It might be in:

// /usr/local/var/mysql/your_computer_name.local.err
// It's probably problem with permissions

// check if any mysql instance is running

// ps -ef | grep mysql
// if yes, you should stop it, or kill the process

// kill -9 PID
// where PID is the number displayed next to username on output of previous command
// check ownership of /usr/local/var/mysql/

// ls -laF /usr/local/var/mysql/
// if it is owner by root you should change it mysql or your_user
// sudo chown -R mysql /usr/local/var/mysql/


// try to find your log file with suffix ".err", there should be more info. It might be in:

// /usr/local/var/mysql/your_computer_name.local.err
// It's probably problem with permissions

// check if any mysql instance is running

// ps -ef | grep mysql
// if yes, you should stop it, or kill the process

// kill -9 PID
// where PID is the number displayed next to username on output of previous command
// check ownership of /usr/local/var/mysql/

// ls -laF /usr/local/var/mysql/
// if it is owner by root you should change it mysql or your_user
// sudo chown -R mysql /usr/local/var/mysql/
