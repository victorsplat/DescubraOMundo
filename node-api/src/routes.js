const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
})
router.get('/login', (req, res) => {
    console.log(req.body)
    res.sendFile(__dirname + '/html/login.html');
})
router.get('/register', (req, res) => {
    console.log(req.body)
    res.sendFile(__dirname + '/html/register.html');
})
router.post('/success', (req, res) => {
    const createUser = require('./controllers/RegisterController')
    createUser(req.body.emailUser, req.body.passUser, req.body.userAge, req.body.userName)
    res.sendFile(__dirname + '/html/index.html')
})
module.exports = router