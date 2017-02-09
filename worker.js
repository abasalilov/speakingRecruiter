const port = process.env.PORT || 8080;
// var controller = require('./controllers/index.js');
var request = require('request');
var http = require('http');
var data = require('./initializeDB.js')

// for (var i = 0; i < data.lessons.length; i++) {
//   request({
//     method: 'POST',
//     uri: 'http://localhost:'+port+'/lessons',
//     json: {
//       Title: data.lessons[i].Title,
//       Summary: data.lessons[i].Summary,
//       Content: data.lessons[i].Content
//     }, function(err, response, body) {
//       if (err) {
//         console.log('body inside forloop', body)
//         console.error('err here', err);
//       }
//       if (response) {
//         console.log('response', response);
//       }
//     }
//   });
// }

for (var i = 0; i < data.questions.length; i++) {
  request({
    method: 'POST',
    uri: 'http://localhost:'+port+'/questions',
    json: {
      q: data.questions[i].q,
      lessonId: data.questions[i].lessonId
    }, function(err, response, body) {
      if (err) {
        console.error(err);
        console.log(err);
      }
      if (response) {
        console.log('response', response);
      }
if (body) {
        console.log('body', body);
      }
    }
  });
}