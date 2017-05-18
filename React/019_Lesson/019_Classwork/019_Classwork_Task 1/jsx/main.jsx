// ### Задача 1 
// Используя JSX, отобразите на странице текст Hello World в теге h1

var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
    <h1>Hello World!</h1>,
    document.getElementById('task')
);