function firstOccurance(arr, target) {
    var l = 0;
    var r = arr.length - 1;
    var ans = -10000;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) {
            ans = mid;
            r = mid - 1;
        }
        else if (arr[mid] < target) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return ans;
}
var arr = [10, 10, 10, 10, 10, 10, 20, 20, 20, 20, 20, 20, 30, 30, 30, 30];
console.log(firstOccurance(arr, 3123));
