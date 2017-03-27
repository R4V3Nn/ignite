var user = {
    firstName: "Вася",
    sayHi: function () {
        console.log(this.firstName);
    }
};
var f = user.sayHi.bind(user);
f();