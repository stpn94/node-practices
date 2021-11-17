const mysql = require('mysql2');

module.exports = function () {
  return mysql.createConnection({
    host: '192.168.80.101',
    port: 3306,
    user: 'webdb',
    password: 'webdb',
    database: 'webdb',
  });
};
