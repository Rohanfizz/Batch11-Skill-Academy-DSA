function getMaxEle(arr:number[]) : number{
    let maxi = -Infinity;
    for(let i = 0;i<arr.length;i++){
        if(arr[i] > maxi){
            maxi = arr[i];
        }   
    }
    return maxi;
}

function printBarChart(arr:number[]):void{
    let m = getMaxEle(arr);
    let n = arr.length;

    for(let floor = m; floor>=1 ;floor--){
        let s = "";
        for(let i = 0;i<n;i++){
            if(floor <= arr[i]){
                s+="*";
            }else s+=" ";
        }
        console.log(s);
    }
}
let arr:number[] = [5,6,2,4,3,7,2,5];
printBarChart(arr)