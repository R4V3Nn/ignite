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