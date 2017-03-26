//Task 1
console.log ("*****Task-1*****");

function sum(a) {

  var currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}
alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) )

//Task 2
console.log("*****Task-2*****");

function runString(arg, obj) {
    return new Function(obj.param, obj.func)(arg);
}

var arg = 4;
obj = {
      param: 'num',                  
      func: 'return Math.sqrt(num)'  
    };

runString(arg, obj);
console.log(runString(arg, obj));

//Task 3
console.log("*****Task-3*****");

var ladder = {
  step: 0,
  up: function() { 
    this.step++;
    return this;
  },
  down: function() { 
    this.step--;
    return this;
  },
  showStep: function() { 
    console.log( this.step );
    return this;
  }
};


ladder.up().up().down().up().down().showStep();