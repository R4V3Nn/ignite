function myFunc (a){
    var temp = a;
    myFunc = function (){
        var arg = arguments[0] ? arguments[0]:0;
        return temp = temp + arg;
    }
    return myFunc();
}

console.log(myFunc(3)); //3
console.log(myFunc(5)); //8
console.log(myFunc(228)); //236