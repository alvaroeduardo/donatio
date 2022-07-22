const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.DB_NAME
});

module.exports = connection;