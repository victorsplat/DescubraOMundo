const db = require('./db.js')
const registro = db.sequelize.define('usuarios', {
    email: { type: db.Sequelize.STRING },
    senha: { type: db.Sequelize.STRING },
    idade: { type: db.Sequelize.INTEGER },
    nome: { type: db.Sequelize.STRING },
    id: { type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true, }
})

module.exports = registro

//Executar isso ao fazer deploy e após, apagar
// registro.sync({ force: true })