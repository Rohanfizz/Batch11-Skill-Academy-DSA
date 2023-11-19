let arr: number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

function itr1(arr){
    for(let i= 0;i<arr.length;i++){
        for(let  j = 0;j<arr[i].length;j++){
            console.log(arr[i][j]);
        }
    }
}

function itr2(arr){
    for(let i= 0;i<arr.length;i++){
        for(let j= arr[i].length-1; j>=0 ;j--){
            console.log(arr[i][j]);
        }
    }    
}

function itr3(arr){
    for(let i = arr.length-1; i>=0; i--){
        for(let j = arr[i].length-1; j>=0 ;j--){
            console.log(arr[i][j]);     
        }
    }
}

function itr4(arr){
    for(let j  = arr[0].length-1; j>=0;j--){
        for(let i= arr.length-1;i>=0;i--){
            console.log(arr[i][j]);
        }
    }
}

itr4(arr);