
//time complexity :O(n^2)

function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3,2,4,1,6,5]));