// ###Задача 1 
// Напишите код, который выводит в консоль сумму аргументов, переданных в командной строке при запуске файла.

var a = +process.argv[2];
var b = +process.argv[3];

console.log(a + b);