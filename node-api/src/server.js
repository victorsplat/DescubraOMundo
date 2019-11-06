//Requires

const express = require('express')
const path = require('path')
const bp = require('body-parser')

//Inicializando App

const app = express()

//urelencoded
app.use(bp.urlencoded({
    extended:true,
}))

//Conectando ao Banco de Dados
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

app.post('/usuarios',(req, res) =>{
    console.log(req.body)
    res.sendFile(path.join("C:\Users\Pichau\Desktop\DescubraOMundo\src\html" + '/index.html', { root: __dirname }));
})
app.post('/registro',(req, res) =>{
    console.log(req.body)
    res.sendFile(path.join("C:\Users\Pichau\Desktop\DescubraOMundo\src\html" + "/index.html", { root: __dirname }));
})

app.listen(3003)