const registro = require('../models/Register')
const criaUsuario = (email, senha, idade, nome) => {
    registro.create({
        email: email,
        senha: senha,
        idade: idade,
        nome: nome
    })
}
module.exports = criaUsuario