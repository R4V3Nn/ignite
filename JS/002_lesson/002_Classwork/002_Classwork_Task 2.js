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