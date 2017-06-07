// ###Задача 2 
// Дано массив users: 
// ```
// users = [
// { name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
// { name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
// ]
// ```
 
// Реализуйте следующее: 
// * При GET-запросе по пути /users массив users отображается на странице в виде списка(по свойству name). При клике по каждому из элементов списка отправляется GET-запрос по пути /users/userID, где userID - свойство id массива users, соответствующее элементу списка.  
// * При GET-запросе по пути /users/userID на странице отображается информация о соответствующем пользователе - свойства элемента массива users - name и age. 

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port || 1337;

users = [
    { name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
    { name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
];

app.get('/', function(req, res) {
    res.redirect('/users');
});

app.get('/users', function(req, res) {
    res.sendFile(path.join(__dirname, '/public2/view.html'));
});

app.get('/users/:id', function(req, res) {
    res.end(`name: ${users[req.params.id].name}, age: ${users[req.params.id].age}`)
});

app.listen(port, function () {
    console.log('App listening on port ' + port);
});