const fs = require('fs')
fs.readFile('./output1.json', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;

    console.log('Json Sendo Parseado') 
    conteudo = JSON.parse(content)
    exports = conteudo
});
