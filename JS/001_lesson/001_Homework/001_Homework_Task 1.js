var arr = ["b","g","n","r",45,3,5,"g"];
function find(arr, value){
    for(i=0; i<arr.length; i++){
        if (arr[i]==value){
            return i;
        }
    }
}

console.log(find(arr, 3));