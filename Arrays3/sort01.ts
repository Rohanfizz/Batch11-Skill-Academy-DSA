function swap(arr,i,j){
    let temp  = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sort01(arr:number[]){
    let i = 0;
    let j = 0;
    
    while(i<arr.length){
        if(arr[i] == 0){
            swap(arr,i,j);
            i++;
            j++;
        }else{
            i++;
        }
    }
}

let arr = [0,1,0,0,1,1,0,1,0,0,1,1];
sort01(arr);
console.log(arr);
