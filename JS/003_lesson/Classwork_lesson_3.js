//Task 1
Почему первое равенство – неверно, а второе – верно?
```
alert( [] == [] ); // false
alert( [] ==! [] ); // true
```
Какие преобразования происходят при вычислении?

Ответ: Два объекта равны если это один и тот же объект.

//Task 2
console.log("*****Task-2*****");

function Calculator (){
    this.read = function () {
        this.x = +prompt("x",0);
        this.y = +prompt("y",0);
    }
    this.sum = function () {
        return this.x + this.y;
    }
    this.mul = function () {
        return this.x * this.y;
    }
}

var calculator = new Calculator();
calculator.read();

//Task 3
console.log("*****Task-3*****");

function Sumator (){
    this.sum = function(a,b) {
        return a + b;
    }
    this.run = function() {
        var a = +prompt("x",0);
        var b = +prompt("b",0);
        console.log("sum = " + this.sum(a,b));
    }
}

new Sumator().run();