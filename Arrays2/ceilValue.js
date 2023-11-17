function getCeil(arr, target) {
    var l = 0;
    var r = arr.length - 1;
    var ans = Infinity;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target)
            return arr[mid];
        else if (arr[mid] < target)
            l = mid + 1;
        else {
            ans = arr[mid];
            r = mid - 1;
        }
    }
    return ans;
}
var arr = [10, 15, 25, 35, 45, 55, 65, 75, 85, 95];
console.log("11=>", getCeil(arr, 11));
console.log("34=>", getCeil(arr, 34));
console.log("65=>", getCeil(arr, 65));
console.log("99=>", getCeil(arr, 99));
console.log("-1000=>", getCeil(arr, -1000));
