// ### Задача 1 
// Создайте HTTP сервер, который записывает заголовки каждого запроса в отдельный файл, имя которого - номер запроса(1 - для первого запроса, 2 - для второго и т.д.).

const http = require('http');
const fs = require('fs');
const port = process.env.port || 1337;

var counter = 1;

const server = http.createServer((req, res) => {
    var headers = req.headers;

    var text = '';
    for (var prop in headers) {
        text += `${prop}: ${headers[prop]};\n`
    }

    var file = `${counter}.txt`;
    counter++;

    fs.writeFile(`files/${file}`, text, (err) => {
        if (err) throw err;

        console.log(`Request headers saved to file ${file}`)
    });

    res.end();

}).listen(port);

console.log('server running on port ' + port);