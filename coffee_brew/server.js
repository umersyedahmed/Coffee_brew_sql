const express = require('express')
const app = express()
const mysql = require('mysql')
// const bodyParser = require('body-parser');



const port = process.env.PORT || 3000

// Connection Details
const connection = mysql.createConnection({
  host: 'us-cdbr-east-05.cleardb.net',
  user: 'b291a416ce1264',
  password: 'b24e430c',
  database: 'heroku_8a8b8d31b885b6f'
})

// View en
app.set('view engine', 'ejs')

// Render Home Page
app.get('/', function (req, res) {

  connection.query('SELECT * FROM user', (error, rows) => {
    if (error) throw error;

    if (!error) {
      console.log(rows)
      res.render('pages/index', { rows })
    }

  })

})

app.listen(port)
console.log(`Server is listening on port ${port}`);

