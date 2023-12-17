function mergeTwoSortedArrays(ar1: number[], ar2: number[]): number[] {
    let ans: number[] = [];

    let i = 0;
    let j = 0;

    while (i < ar1.length && j < ar2.length) {
        if (ar1[i] < ar2[j]) {
            ans.push(ar1[i]);
            i++;
        } else {
            ans.push(ar2[j]);
            j++;
        }
    }

    //if j goes out of bounds
    while (i < ar1.length) ans.push(ar1[i++]);

    //if i goes out of bounds
    while (j < ar2.length) ans.push(ar2[j++]);

    return ans;
}

function mergeSort(l: number, r: number, arr: number[]): number[] {
    if(l == r) return [ arr[l] ];
    let mid = Math.floor((l+r)/2)

    let leftSorterArray = mergeSort(l,mid,arr);
    let rightSortedArray = mergeSort(mid+1,r,arr);

    let fullSortedArray = mergeTwoSortedArrays(leftSorterArray,rightSortedArray);
    return fullSortedArray;
}

function sort(arr:number[]){
    return mergeSort(0,arr.length-1,arr);
}


let arr = [6,3,6,2,3,4,1,3,6,8,4,23,4,6];
console.log(sort(arr));

