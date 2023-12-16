var arr = [10, 20, 30, 20, 40, 20, 50];
function firstLast(i, arr, target) {
    if (i == arr.length)
        return [-1, -1];
    var futureAns = firstLast(i + 1, arr, target);
    if (arr[i] == target) {
        futureAns[0] = i;
        if (futureAns[1] == -1)
            futureAns[1] = i;
    }
    return futureAns;
}
var ans = firstLast(0, arr, 20);
console.log(ans);
