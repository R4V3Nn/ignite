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