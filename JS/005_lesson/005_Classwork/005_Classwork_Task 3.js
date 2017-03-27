function getType(arg) {
    try {
        if (arguments.length > 1) {
            throw new Error("Too many arguments!");
        }
        return typeof arg;
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}
console.log(getType(10));
console.log(getType("abc"));
console.log(getType({}));
console.log(getType(true));
console.log(getType(null));
console.log(getType(10, "abc"));