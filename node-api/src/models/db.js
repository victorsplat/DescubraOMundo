//Conectando ao Banco de Dados

//Sequelize config

const Sequelize = require('sequelize')
const sequelize = new Sequelize('bancoDOM', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}