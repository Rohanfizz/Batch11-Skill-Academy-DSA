function swap(arr:number[],i:number,j:number):void{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function reverseArrayRange(arr:number[],l:number,r:number):void{
    while(l<r){
        swap(arr,l,r);
        l++;
        r--;
    }
}

function rotateKtimes(arr,k){
    let n = arr.length;
    k = k%n;//number of rotations will be reduced
    reverseArrayRange(arr,n-k,n-1);
    reverseArrayRange(arr,0,n-k-1);
    reverseArrayRange(arr,0,n-1);
}

let arr = [1,2,3,4,5];
rotateKtimes(arr,4);
console.log(arr);
