// ###Задача 1 
// Создайте HTTP сервер с помощью Express, который в ответ на любой запрос возвращает html страницу с заголовком "Hello from Express"(в теге h1). 

var express = require('express');
var path = require('path');

var app = express();

var port = process.env.port || 1337;

app.use(function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, function () {
    console.log('App listening on port ' + port);
});