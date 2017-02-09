"use strict";
var db = require('../db/db.js');
// connection.query("SELECT * FROM REG_NODEJS WHERE username='"+body.username+"'", function(err, res, fields){
//         if(err) {
//           response.sendFile( "/js/nodejs/folder1/unauthorised.html");
//         } else {
//           bcrypt.compare(body.pwd, res[0].password, function(err, res) {
//             if(res) {
//               console.log("authorised user");
//               response.sendFile( "/js/nodejs/folder1/authorised.html");
//             } else {
//               console.log("not an authorised user");
//               response.sendFile( "/js/nodejs/folder1/unauthorised.html");
//             }
//           });
//         }

module.exports = {

  lessons: {
    get: function (callback) {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~')
      var queryStr = 'select * from lessons';
      db.query(queryStr, function(err, results) {
        console.log('results in get', results)
        callback(err, results);
      });
    },
    post: function (params, callback) {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~')
      var queryStr = 'insert into lessons(title, summary, content) value (?, ?, ?)';
      console.log('models 33 queryStr', queryStr)
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
        console.error(err);
        console.log('results',results);
      });
    }
  },
  answers: {
    get: function (callback) {
      var queryStr = 'select * from answers';
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~')
      db.query(queryStr, function(err, results) {
        callback(err, results);
        console.error(err);
        console.log('results',results);
      });
    },

    post: function (params, callback) {
      // create a message for a user id based on the given username
      var queryStr = 'insert into answers(answerText, questionID, user) value (?, ?, ?)';
      console.log('models 65 queryStr', queryStr)
      db.query(queryStr, params, function(err, results) {
        if(err){ console.error(err)}
        callback(err, results);
      });
    }
  },
  users: {
    get: function (params, callback) {
      console.log('callback inside models', callback);
      var queryStr = 'SELECT Username FROM User WHERE User.Username = '+params.body+'';
      console.log('models 64 queryStr', queryStr)
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
        console.log('results in line', results);
      });
    },
    post: function (params, callback) {
      console.log('models users 50, params', params)
      var queryStr = 'insert into User(Username, password, null, null ) values (?, ?, ?, ?)';
      console.log('models 73 queryStr', queryStr)
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },

  questions: {
    get: function (callback) {
      var queryStr = 'select * from questions';
      console.log('models 82 queryStr', queryStr)
      db.query(queryStr, function(err, results) {
        console.log('results from questions', results)
        callback(err, results);
      });
    },
    post: function (params, callback) {
      var queryStr = 'insert into questions(questionId, lessonID) values (?, ?)';
      console.log('models 89 queryStr', queryStr)
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }
};