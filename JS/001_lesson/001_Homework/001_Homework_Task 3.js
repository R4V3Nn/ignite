 var arr = [[1,2],[3,4],[5,6]];
    function bigToSmall(arr){
        var arr2 = [];
        for(i=0; i<arr.length; i++) {
            arr2 = arr2.concat(arr[i]);

        }
        return arr2.join('>');

    }
    console.log(bigToSmall(arr));