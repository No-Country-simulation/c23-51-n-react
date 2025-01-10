const mysql = require('mysql2');
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: '',
  multipleStatements: true 
});

function createDatabase() {
  connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`, (err, results) => {
    if (err) {
      console.error('Error creando la base de datos:', err.stack);
      return;
    }
    console.log('Base de datos creada o ya existente');
  });
}

module.exports = { connection, createDatabase };