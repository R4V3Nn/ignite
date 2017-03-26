//Task 1
console.log("*****Task-1*****");

function sumArgs() {
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    });
}

console.log(sumArgs(4, 5, 6));

//Task 2
console.log("*****Task-2*****");

var user = {
    firstName: "Вася",
    sayHi: function () {
        console.log(this.firstName);
    }
};
var f = user.sayHi.bind(user);
f();

//Task 3
console.log("*****Task-3*****");

function joinArgs() {
  arguments.join = [].join;
  return arguments.join('*');
}

console.log(joinArgs(1, 2, 3));
console.log(joinArgs('hello', 'world', '!'));
