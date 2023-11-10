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

let arr = [10,20,30,40,50,60,70,80,90,100,110,112];
reverseArrayRange(arr,5,8);
console.log(arr);;
