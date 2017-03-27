function makeArmy() {
    var shooters = [];

    for (var i = 0; i < 10; i++) {
        var shooter = function s() { // функция-стрелок
            console.log(s.i); // выводит свой номер
        };
        shooter.i = i;
        shooters.push(shooter);
    }
    return shooters;
}
var army = makeArmy();
army[0](); // стрелок выводит 0.
army[5](); // стрелок выводит 5.