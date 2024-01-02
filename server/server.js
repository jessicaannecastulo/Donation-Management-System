const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employee',
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database!');
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoints
app.get('/api/donation_tbl', (req, res) => {
  const query = 'SELECT * FROM donation_tbl';
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/api/donation_tbl', (req, res) => {
  const { donorName, amount } = req.body;
  const query = 'INSERT INTO donation_tbl (name, gender, donationType, dateDonated, address) VALUES (?, ?, ?, ?, ?)';
  connection.query(query, [donorName, amount], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
