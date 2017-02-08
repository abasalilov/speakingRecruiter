var mysql = require('mysql');

var db_config = {
    host: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'beb15e3584f68b',
    password: 'db775cb8',
    database: 'heroku_f4690368ce3cf33',
    pool: { maxConnections: 50, maxIdleTime: 30}
};

var connection;
function handleDisconnect() {
    console.log('1. connecting to db:');
    connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                    // the old one cannot be reused.

    connection.connect(function(err) {                  // The server is either down
        if (err) {
            console.error('errorrororor', err)                          // or restarting (takes a while sometimes).
            console.error('2. error when connecting to db:', err.stack);
            setTimeout(handleDisconnect, 100); // We introduce a delay before attempting to reconnect,
        }
                               // to avoid a hot loop, and to allow our node script to
    });                                         // process asynchronous requests in the meantime.

    connection.on('error', function(err) {
        console.log('3. db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {  // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                        // connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
}

handleDisconnect();

module.exports = connection;