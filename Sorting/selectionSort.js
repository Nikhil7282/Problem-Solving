
//time Complexity : O(n^2)

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]>arr[j]){
                min=j;
            }
        }
        // swap(arr[i],arr[min])
        [arr[i],arr[min]]=[arr[min],arr[i]]
    }
    return arr;
}

console.log(selectionSort([3,4,5,1,2,7]));