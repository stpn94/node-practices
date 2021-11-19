const mysql = require('mysql');
const util = require('util');
const emaillist = require('../controllers/guestbook');

const dbconn = require('./dbconn');

module.exports = {
    findAll: async function() {
        
        const conn = dbconn();
        // const query = (sql, data) => new Promise((resolve, reject) => conn.query(sql, data, (error, rows, field) => error ? reject(error):resolve(rows))); 
        const query = util.promisify(conn.query).bind(conn);

        try {
            const results = await query("select no , name , password , message from guestbook", []);
            return results;    
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    },
    insert: async function(guestbook) {

        console.log(Object.values(guestbook));

        const conn = dbconn();
        // const query = (sql, data) => new Promise((resolve, reject) => conn.query(sql, data, (error, rows, field) => error ? reject(error):resolve(rows))); 
        const query = util.promisify(conn.query).bind(conn);

        try {
            const results = await query("insert into guestbook values(null , ? , ? , ? , now())", [guestbook.name , guestbook.password , guestbook.message]);
            return results;    
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }

    }
    ,
    delete: async function(guestbook) {

        console.log(Object.values(guestbook));

        const conn = dbconn();
        // const query = (sql, data) => new Promise((resolve, reject) => conn.query(sql, data, (error, rows, field) => error ? reject(error):resolve(rows))); 
        const query = util.promisify(conn.query).bind(conn);

        try {
            const results = await query("delete from guestbook where password = ? and no = ? ", [guestbook.password , guestbook.no]);
            return results;    
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }

    }
}