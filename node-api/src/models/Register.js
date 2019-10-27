const Sequelize = require('sequelize')
const sequelize = require('../db.js')
const registro = sequelize.define('usuarios', {
    email: { type: Sequelize.STRING },
    senha: { type: Sequelize.STRING },
    idade: { type: Sequelize.INTEGER },
    nome: { type: Sequelize.STRING },
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, }
})

module.exports = registro



// registro.sync()