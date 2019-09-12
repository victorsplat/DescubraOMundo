//Imports
const nodemailer = require('nodemailer')
const fs = require('fs')

var conteudo
//Objeto que vai receber o email e a senha
let conta = {}
const senha = '44112841vi';

//Função usando o FileSystem para obter o JSON
fs.readFile('./JSON/output1.json', function read(err, data) {
    //Tratamento de Erro
    if (err) {
        throw err;
    }
    this.content = data;

    console.log('Json Sendo Parseado')

    //Transformar os dados obtidos em um JSON
    conteudo = JSON.parse(content)

    conta.email = conteudo.email

    console.log(conta)
    Enviar()
});

//Funcao a ser ativada depois que o email é obtido
let Enviar = () => {

const email = {
    user: conta.email,
    pass: senha
}
//criacao do transportador

let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false, // true for 465, false for other ports
    auth: {
        user: email.user, // generated ethereal user
        pass: email.pass // generated ethereal password
    }
});

//opções do email
const mailOptions = {
    from: 'victorprado123@gmail.user', // sender address
    to: 'victorsplat@hotmail.com', // list of receivers
    subject: 'Subject of your email', // Subject line
    html: `<h1>${conteudo}</h1>`
};
//envio de fato
 transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });
}