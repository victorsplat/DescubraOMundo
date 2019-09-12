const fs = require('fs');

const obj = {
    id:1,
    nome:'Victor',
    idade:18,
    sexo:'M',
    email:'victorprado123@gmail.com'
}
const dados = JSON.stringify(obj)

fs.writeFile(`output${obj.id}.json`, dados, 'utf8', function (err) {
    if (err) {
        console.log("Um Erro Ocorreu ao salvar o conteúdo em um JSON");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});