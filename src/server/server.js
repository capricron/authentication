const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const RouterUser = require('./routes/User');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use('/', RouterUser);

app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});

// app.get('/api/users', (req, res) => {
//   console.log( process.env.MYSQL_HOST)
//   pool.query(`select * from ${table}`, (err, rows) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(rows);
//     }
//   });
// });

// app.get('/testing', (req, res) => {
//   res.json({
//     message: 'Hello World',
//   });
// });