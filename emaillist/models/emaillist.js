const mysql = require('mysql2');
const util = require('util');
const dbconn = require('./dbconn');

module.exports = {
  findAll: async function (callback) {
    const conn = dbconn();
    // const conn = mysql.createConnection({
    //   host: '127.0.0.1',
    //   port: 3306,
    //   user: 'webdb',
    //   password: 'webdb',
    //   database: 'webdb',
    // });

    // const query = function(sql, data) {
    //     return new Promise(function(resolve, reject){
    //         conn.query(sql, [], function(error, results, field){
    //             return error ? reject(error) : resolve(results);
    //         })
    //     })
    // }

    // const query = (sql, data) => new Promise((resolve, reject) => conn.query(sql, [], (error, results, field) => (error ? reject(error) : resolve(results))))

    const query = util.promisify(conn.query).bind(conn);

    try {
      return await query(
        'select no, first_name as firstName, last_name as lastName, email from emaillist order by no desc',
        []
      );
    } catch (e) {
      console.error(e);
    } finally {
      conn.end();
    }
  },
  insert: async function (emaillist) {
    const conn = dbconn();
    const query = util.promisify(conn.query).bind(conn);

    try {
      return await query(
        'insert into emaillist(first_name, last_name, email) valus(?,?,?)',
        Object.values(emaillist)
      );
    } catch (error) {}
  },
};
