var obj = {
    name: "Jack",
};

function isEmpty(obj) {
    for (var key in obj) {
        return true;
    }
    return false;
}
console.log(isEmpty(obj));
delete obj.name;
console.log(isEmpty(obj));