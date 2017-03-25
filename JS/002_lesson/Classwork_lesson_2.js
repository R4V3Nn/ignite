//Task 1
/*Каков будет результат выполнения этого кода?
```
var value = 0;
function f() {
  if (1) {
    value = true;
  } else {
    var value = false;
  }
  alert( value );
}
f();
```
Изменится ли внешняя переменная value ?
Как изменится рузультат, если из строки var value = false убрать ключевое слово var?
Ответ: Результат будет true. Внешняя переменная value не измениться, измениться локальная переменная. 
Если из строки var value = false убрать ключевое слово var, результат будет true, но измениться внешняя переменная так как в функциии нет локальных.
*/

//Task 2
console.log("*****Task-2*****");

function myFunc() {
    var counter = 0;
    return function () {
        return ++counter;
    }
}
var fn = myFunc();
fn();
fn();
console.log(fn());

//Task 3
console.log("*****Task-3*****");

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