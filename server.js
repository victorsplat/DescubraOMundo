//Requires
const express = require('express')
const bp = require('body-parser')
const routes = require('./node-api/src/routes.js')
const handlebars = require('express-handlebars')
const port = 3003
const db = require('./node-api/src/models/db')

//Config

//Inicializando App

const app = express()

//Sequelize Initiate

db.sequelize.authenticate().then(() => (console.log('Sucesso ao se conectar ao banco de dados!'))).catch(
    (erro) => console.log(`Erro ao se conectar ao banco de dados! ${erro}`)
)

//Load Static Files

app.use(express.static('public'))

//urelencoded

app.use(bp.urlencoded({
    extended: true,
}))

//Config Handlebars

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Import das rotas

app.use(routes)

//ServerStart & Port Listening

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})