//Requires
const express = require('express')
const bp = require('body-parser')
const routes = require('./node-api/src/routes.js')

//Sequelize config
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

//Inicializando App

const app = express()

//Sequelize Initiate
sequelize.authenticate().then(() => (console.log('Sucesso ao se conectar ao banco de dados!'))).catch(
    (erro) => console.log(`Erro ao se conectar ao banco de dados! ${erro}`)
)

//Load Static Files
app.use(express.static('public'))

//urelencoded
app.use(bp.urlencoded({
    extended: true,
}))

//Conectando ao Banco de Dados


//Import das rotas

app.use(routes)

app.listen(3003)