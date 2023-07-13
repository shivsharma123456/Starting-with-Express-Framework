const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'node-complete',
  database: 'nodecomplete'
});

// module.exports = connection.promise();
