// ###Задача 1 
// Создайте HTTP сервер, который при обработке всех HTTP запросов создает подписанный cookie, доступный только для сервера со сроком жизни 1 неделя. 


const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

const port = process.env.port || 1337;

app.use(cookieParser('server secret'));

app.all('*', function (req, res) {

    res.cookie(`cookie`, `${req.url}, ${req.method}`, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        signed: true
    }).end();

    console.log(req.signedCookies.cookie);
});

app.listen(port, function () {
    console.log('App listening on port ' + port);
});
