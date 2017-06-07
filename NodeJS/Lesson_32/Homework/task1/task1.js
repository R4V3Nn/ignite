// ###Задача 1 
// Дополните код 3-й задачи предыдущего урока. Добавьте в приложение возможность удалять и редактировать элементы. Реализуйте следующее: 
// * Добавьте на главную страницу приложения (страница, которая отображается при GET-запросе по пути '/'), поле ввода(для ввода id элемента) и 2 кнопки(Delete Item и Edit Item). 

// * Если поле ввода не пустое, при нажатии на кнопку Delete Item осуществляется поиск в базе данных элемента по указанному в поле ввода ID и, в случае, если элемент найден, его удаление. 

// * Если поле ввода не пустое, при нажатии на кнопку Edit Item осуществляется поиск в базе данных элемента по указанному в поле ввода ID и, в случае, если элемент найден, переход по пути '/editItem' и загрузка страницы редактирования элемента. 
// * На странице редактирования элемента находятся 2 поля ввода: name и info и кнопка Apply. 
// * Если поля ввода name и info не пустые, при нажатии на кнопку Apply осуществляется обновление элемента в базе данных. 

// * После обновления или удаления элемента происходит перенаправление на главную страницу приложения. 

const express  = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.port || 1337;

const displayHandler = require('./js/displayHandler');
const insertHandler = require('./js/insertHandler');
const editHandler = require('./js/editHandler');

app.set('views', path.join(__dirname, './pages'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());

app.get('/', displayHandler.displayAllItems);

app.get('/addItem', insertHandler.loadAddPage);
app.post('/addItem', insertHandler.addItem);

app.delete('/delete/:id', editHandler.removeItem);
app.get('/edit/:id', editHandler.itemEditCheck);

app.get('/editItem/:id', editHandler.loadEditPage);
app.put('/editItem/', editHandler.changeItem);

app.use(function(req, res) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Page not found!');
});

app.use(function(err, req, res, next) {
    res.status(500).send('oops...something went wrong');
    next(err.stack);
});

app.listen(port, function() {
    console.log('app listening on port ' + port);
});