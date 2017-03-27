function sum (a){
    return function b (b) {
        return a+b;
    }
}

console.log(sum(4)(6));