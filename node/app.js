const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '88553246@',
  database: 'abc'
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database');
    return;
  }
  console.log('Connected to the database');
});


app.get('/', (req, res) => {
  connection.query('SELECT * FROM account', (error, results, fields) => {
    if (error) throw error;
/*     var getArray = [];
    const id = results[0].id
    const userid = results[0].userid
    getArray.push(id)
    getArray.push(userid)
    res.send(`${getArray}`); */
  });

  /*   var tarray = [];
    const id = results[0].id
    const userid = results[0].userid
    tarray.push(id)
    tarray.push(userid)
    console.log(results[0].id) 
        res.send(`${tarray}`);
    */
  /*   const param = req.query.row;
    console.log(param);
    res.send(`${generateXOPattern2(param)}`); */
});

/* 
function generateXOPattern(rows) {
  let pattern = '';
  for (let i = 0; i < rows; i++) { // แนวตั้ง
    for (let j = 0; j <= rows; j++) { // แนวนอน
      if (j <= i) {
        pattern += 'X';
      } else {
        pattern += 'O';
      }
    }
    pattern += '<br>';
  }
  return pattern;
}


function generateXOPattern2(rows) {
  let pattern = '';
  for (let i = 0; i < rows; i++) { // แนวตั้ง
    for (let j = 0; j <= rows * 2; j++) { // แนวนอน
      if (j <= i || j >= (rows * 2) - i)  {
        pattern += 'X';
      } else {
        pattern += 'O';
      }
    }
    pattern += '<br>';
  }
  return pattern;
}
 */

