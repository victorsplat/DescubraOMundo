const registro = require('../models/Account')
const criaUsuario = (email, senha, idade, nome) => {
    registro.create({
        email: email,
        senha: senha,
        idade: idade,
        nome: nome
    }).then(() => {
        console.log("Usuário Criado com Sucesso!")
        return "Sucesso"
    }).catch((erro) => {
        console.log("Erro: " + erro)
        return "Falha"
    })
}
module.exports = criaUsuario