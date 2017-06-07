// ###Задача 3 
// Дополните код предыдущей задачи. Добавьте 2 middleware-функции: 
// * функция для обработки GET запроса по пути '/test'. Функция должна возвращать html страницу с полем ввода и кнопкой. Если поле ввода не пустое, при нажатии на кнопку создается POST запрос по пути '/test'. Тело запроса - текст поля ввода.  
// * функция для обработки POST запроса по пути '/test'. Функция выводит на экран тело запроса.


var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var port = process.env.port || 1337;

app.use(function(req, res, next) {
    console.log(`url: ${req.url}`);
    console.log(`method: ${req.method}`);
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/test.html'));
});

app.post('/test', function(req, res) {
    console.log(`POST req to '/test': ${req.body.data}`);
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(req.body.data);
});

app.use(function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, function () {
    console.log('App listening on port ' + port);
});