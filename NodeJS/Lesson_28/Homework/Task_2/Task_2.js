// ###Задача 2 
// Рядом с файлом с задачами в папке Homework находится файл test.txt.
//  Напишите код, который выведет в консоль с 10 по 15 байт этого файла. 
const fs = require('fs');

const buffer = Buffer.alloc(6);

fs.open('test.txt', 'r', (err, fd) => {
    if (err) {
        console.error(err);
        return;
    }

    // read 10-15 bytes 
    fs.read(fd, buffer, 0, buffer.length, 10, function (err, bytes) {

        if (err) {
            console.error(err);
            return;
        }

        console.log(buffer.slice(0, bytes).toString());

    });

    fs.close(fd, function (err) {
        if (err) {
            console.error(err);
            return;
        }
    })

});