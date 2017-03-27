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