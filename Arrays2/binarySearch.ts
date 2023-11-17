function binarySearch(arr:number[],target:number) : number{
    // You have to return the index where the target is present
    // If target is not present return -1
    let l = 0;
    let r = arr.length-1;
    
    while(l <= r){
        let mid :number  = Math.floor((l+r)/2);

        if( arr[mid] == target ) return mid;
        else if(arr[mid] < target) l = mid+1;
        else r = mid-1;
    }
    return -1;
}

let arr = [10,20,30,40,50,55,60,70,80,90,100];
let idx = binarySearch(arr,55);
console.log(idx);