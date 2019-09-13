//Imports
const nodemailer = require('nodemailer')
//Objeto que vai receber o email e a senha
let conta = {email:"victorprado123@gmail.com", senha:"44112841vi"}
const contaAlvo = {id:1,nome:"Victor",idade:18,sexo:"M",email:"victorprado123@gmail.com"}
//Funcao a ser ativada depois que o email é obtido
let Enviar = () => {

let email = {
    user: conta.email,
    pass: conta.senha
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
let mailOptions = {
    from: 'victorprado123@gmail.user', // sender address
    to: `${contaAlvo.email}`, // list of receivers
    subject: `ID:${contaAlvo.id}, ${contaAlvo.nome}`, // Subject line
    html: `<h1>ID:${contaAlvo.id}, ${contaAlvo.nome}</h1> <p>${JSON.stringify(contaAlvo)}</p>`
};
//envio de fato
 transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });
}
Enviar();
