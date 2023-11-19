function swap(arr,i,j){
    let temp = arr[i];
    arr[i]  = arr[j];
    arr[j] = temp;
}
function sort012(arr, N){
    //your code here
    let i = 0;
    let j = 0;
    let k  = N-1;
    
    while(i <= k){
        if(arr[i] == 0){
            this.swap(arr,i,j);
            i++;
            j++;
        }else if(arr[i] == 1){
            i++;
        }else{
            this.swap(arr,i,k);
            k--;
        }
    }
    return arr;
}