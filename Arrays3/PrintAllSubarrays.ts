function subarrayPrinter(arr:number[], sp,ep){
    let s:number[] = [];
    for(let i = sp;i<=ep;i++){
        s.push(arr[i]);
    }
    console.log(s);
}

function printAllSubarrays(arr: number[]): void {
    for(let sp = 0; sp<arr.length ; sp++ ){
        for(let ep = sp; ep<arr.length ;ep++){
            subarrayPrinter(arr,sp,ep);
        }
    }
}

let arr = [10,20,30,40,50];
printAllSubarrays(arr);
