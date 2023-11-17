function binarySearch(arr, target) {
    // You have to return the index where the target is present
    // If target is not present return -1
    var l = 0;
    var r = arr.length - 1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] < target)
            l = mid + 1;
        else
            r = mid - 1;
    }
    return -1;
}
var arr = [10, 20, 30, 40, 50, 55, 60, 70, 80, 90, 100];
var idx = binarySearch(arr, 55);
console.log(idx);
