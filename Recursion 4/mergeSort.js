function mergeTwoSortedArrays(ar1, ar2) {
    var ans = [];
    var i = 0;
    var j = 0;
    while (i < ar1.length && j < ar2.length) {
        if (ar1[i] < ar2[j]) {
            ans.push(ar1[i]);
            i++;
        }
        else {
            ans.push(ar2[j]);
            j++;
        }
    }
    //if j goes out of bounds
    while (i < ar1.length)
        ans.push(ar1[i++]);
    //if i goes out of bounds
    while (j < ar2.length)
        ans.push(ar2[j++]);
    return ans;
}
function mergeSort(l, r, arr) {
    if (l == r)
        return [arr[l]];
    var mid = Math.floor((l + r) / 2);
    var leftSorterArray = mergeSort(l, mid, arr);
    var rightSortedArray = mergeSort(mid + 1, r, arr);
    var fullSortedArray = mergeTwoSortedArrays(leftSorterArray, rightSortedArray);
    return fullSortedArray;
}
function sort(arr) {
    return mergeSort(0, arr.length - 1, arr);
}
var arr = [6, 3, 6, 2, 3, 4, 1, 3, 6, 8, 4, 23, 4, 6];
console.log(sort(arr));
