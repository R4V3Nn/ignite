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