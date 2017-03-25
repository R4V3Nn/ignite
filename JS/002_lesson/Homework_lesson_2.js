//Task 1
console.log("*****Task-1*****");

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

//Task 2 
console.log("*****Task-2*****");

function strCount(obj) {
    var count = 0;
    for(key in obj){
        if (typeof obj[key] == "string") {
            count++;
        }
        if (typeof obj[key] == "object") {
            count += strCount(obj[key]);
        }
        
    }
    return count;
}

console.log(strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  }));

//Task 3
console.log("*****Task-3*****");

function sum (a){
    return function b (b) {
        return a+b;
    }
}

console.log(sum(4)(6));