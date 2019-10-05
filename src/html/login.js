const express = require('express')
const path = require('path')
const app = express()
const bp = require('body-parser')
app.use(bp.urlencoded({
    extended:true,
}))

app.post('/usuarios',(req, res) =>{
    console.log(req.body)
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.post('/registro',(req, res) =>{
    console.log(req.body)
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(3003)