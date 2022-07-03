const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 8000;
const table ='users';

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});

app.get('/api/users', (req, res) => {
  console.log( process.env.MYSQL_HOST)
  pool.query(`select * from ${table}`, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

app.get('/testing', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});