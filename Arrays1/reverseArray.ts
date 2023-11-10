function bruteForce(arr:number[]):number[]{
    let narr :number[] = [];
    for(let i = arr.length-1;i>=0;i--){
        narr.push(arr[i]);
    }
    return narr;
}

function swap(arr:number[],i:number,j:number):void{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function reverseArray(arr:number[]):void{
    let l = 0;
    let r = arr.length-1;

    while(l<r){
        swap(arr,l,r);
        l++;
        r--;
    }
}

let arr = [10,20,30,40,50];
// console.log(bruteForce(arr));
reverseArray(arr);
console.log(arr);
