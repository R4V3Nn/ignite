function compose(val) {
    var result = val;
    for ( var i=1; i<arguments.length; i++) {
        result = arguments[i].call(this, result);
    }
    return result;
}

var doubleTheValue = function(val) { return val * 2; }
var addOneToTheValue = function(val) { return val + 1; }
console.log(compose(5, doubleTheValue) )//должно вернуться значение 10
console.log(compose(5, doubleTheValue, addOneToTheValue)) // должно вернуться значение  11