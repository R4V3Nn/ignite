var numbers = [1, 2, 31, 24, -67, 5, 3, 555, 79, -4, 21, 33, 89, -90];

function getMax(numbers) {
    var max = null;
    for (var i = 0; i < numbers.length; i++) {
        if (max < numbers[i]) {
            max = numbers[i];
        }
    }
    return max;
}
function getMin(numbers) {
    var min = null;
    for (var i = 0; i < numbers.length; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
        }
    }
    return min;
}

var possitiveAndEvenArr = numbers.filter(function(number) {
    return number >0&&number%2==0;
});

console.log(getMin(numbers));
console.log(getMax(numbers));
console.log(possitiveAndEvenArr);