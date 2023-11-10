function bruteForce(arr) {
    var narr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        narr.push(arr[i]);
    }
    return narr;
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function reverseArray(arr) {
    var l = 0;
    var r = arr.length - 1;
    while (l < r) {
        swap(arr, l, r);
        l++;
        r--;
    }
}
var arr = [10, 20, 30, 40, 50];
// console.log(bruteForce(arr));
reverseArray(arr);
console.log(arr);
