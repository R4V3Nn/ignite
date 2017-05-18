// ###Задача 2 
// Переделайте задание из предыдущей задачи с использованием browserify.

import React from 'react';
import ReactDOM from 'react-dom';

import Users from './users.jsx'

let users = [
    "Jack",
    "Ivan",
    "Philip",
    "Darth Veider",
    "Batman"
];

ReactDOM.render(
    <Users users={users} />,
    document.getElementById('root')
 );