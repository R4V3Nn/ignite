//Task 1
console.log("*****Task-1*****");

var arr = ["b","g","n","r",45,3,5,"g"];
function find(arr, value){
    for(i=0; i<arr.length; i++){
        if (arr[i]==value){
            return i;
        }
    }
}

console.log(find(arr, 3));

//Task 2
console.log("*****Task-2*****");

var arr = [1, 90, 789, 56, 45, 34, 678, 78, -90, -6, 5, 3, 6];
function bubbleSort(arr) {
        for(var i=0; i<arr.length; i++){
            for(var j=0; j<arr.length; j++){
            if(arr[i]<arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
        }
        return arr;
    }
console.log(bubbleSort(arr));

    //Task 3
    console.log("*****Task-3*****");

    var arr = [[1,2],[3,4],[5,6]];
    function bigToSmall(arr){
        var arr2 = [];
        for(i=0; i<arr.length; i++) {
            arr2 = arr2.concat(arr[i]);

        }
        return arr2.join('>');

    }
    console.log(bigToSmall(arr));
    
