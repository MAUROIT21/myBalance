const express = require("express")
const app = express()

// SETTINGS
app.set('appName', 'MyBalance')
app.set('HostName', '127.0.0.1')
app.set('Port', 8000)


// METODOS
app.get('/mybalance', (req, res) => {
    console.log('Get request to server')
    res.send('myBalance page')
})

app.post('/transaction', (req, res) => {
    console.log('Post transaction')
    res.send('Transaccion realizada')
})

app.put('/transaction/:transactionId', (req, res) => {
    console.log('Put transaction')
    res.send('Transaccion actualizada')
})
/* 
// Conexion con MySql
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'balanceAdmin',
  password: 'admin111',
  database: 'Balance_Db'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end() */



// APP LISTEN 
app.listen(port = app.get('Port'), host = app.get('HostName'), () => {
    console.log('AppName: ', app.get('appName'))
    console.log(`Server corriendo en http://${host}:${port}/`);
  }) 