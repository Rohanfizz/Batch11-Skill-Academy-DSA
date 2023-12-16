function printSubsequences(i:number,arr:number[],psf:string){
    if(i == arr.length){
        console.log(psf);
        return;
    }

    //Pick ith element
    printSubsequences(i+1,arr,psf+arr[i]+", ");
    //Not pick ith element
    printSubsequences(i+1,arr,psf);
}

printSubsequences(0,[10,40,30,20],"=>")