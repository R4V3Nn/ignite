// ###Задача 1 
// Создайте EventEmitter, который каждую секунду будет генерировать событие 'tick'.
//  Создайте функцию-обработчик события 'tick', которая будет выводить в консоль количество секунд,
//   прошедшее со времени генерации первого события 'Tick'. 


var events = require('events');
var emitter = new events.EventEmitter

var time = 0;

emitter.on('tick', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    if (time !== undefined) {
        console.log('tick: ' + time++ + 's');
    }
});

setInterval(() => {
    emitter.emit('tick');
}, 1000);