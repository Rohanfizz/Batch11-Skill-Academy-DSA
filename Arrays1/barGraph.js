function getMaxEle(arr) {
    var maxi = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxi) {
            maxi = arr[i];
        }
    }
    return maxi;
}
function printBarChart(arr) {
    var m = getMaxEle(arr);
    var n = arr.length;
    for (var floor = m; floor >= 1; floor--) {
        var s = "";
        for (var i = 0; i < n; i++) {
            if (floor <= arr[i]) {
                s += "*";
            }
            else
                s += " ";
        }
        console.log(s);
    }
}
var arr = [5, 4, 3, 2, 1];
printBarChart(arr);
