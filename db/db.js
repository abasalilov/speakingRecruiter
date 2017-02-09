var mysql = require('mysql');
//mysql://bc043778af10a6:15d711f2@us-cdbr-iron-east-04.cleardb.net/heroku_a8cdd51915a9d36?reconnect=true
var pool = mysql.createPool({
    host: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'bc043778af10a6',
    password: '15d711f2',
    database: 'heroku_a8cdd51915a9d36',
});
console.log('db go')
module.exports = pool;
// var connection;
// function handleDisconnect() {
//     console.log('1. connecting to db:');
//     connection = mysql.createConnection(db_config); // Recreate the connection, since
//                                                     // the old one cannot be reused.

//     connection.connect(function(err) {                  // The server is either down
//         if (err) {
//             console.error('errorrororor', err)                          // or restarting (takes a while sometimes).
//             console.error('2. error when connecting to db:', err.stack);
//             setTimeout(handleDisconnect, 100); // We introduce a delay before attempting to reconnect,
//         }
//                                // to avoid a hot loop, and to allow our node script to
//     });                                         // process asynchronous requests in the meantime.

//     connection.on('error', function(err) {
//         console.log('3. db error', err);
//         if (err.code === 'PROTOCOL_CONNECTION_LOST') {  // Connection to the MySQL server is usually
//             handleDisconnect();                         // lost due to either server restart, or a
//         } else {                                        // connnection idle timeout (the wait_timeout
//             throw err;                                  // server variable configures this)
//         }
//     });
// }

// handleDisconnect();

// module.exports = connection;