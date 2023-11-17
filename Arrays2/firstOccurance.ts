function firstOccurance(arr: number[], target: number): number {
    let l = 0;
    let r = arr.length-1;
    let ans = -1;

    while(l<=r){
        let mid = Math.floor((l+r)/2);

        if(arr[mid] == target){
            ans = mid;
            r = mid-1;
        }else if(arr[mid] < target){
            l = mid+1;
        }else{
            r = mid-1;
        }
    }
    return ans;
}


let arr = [10,10,10,10,10,10,20,20,20,20,20,20,30,30,30,30]
console.log(firstOccurance(arr,20));
