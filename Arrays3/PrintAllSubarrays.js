function subarrayPrinter(arr, sp, ep) {
    var s = [];
    for (var i = sp; i <= ep; i++) {
        s.push(arr[i]);
    }
    console.log(s);
}
function printAllSubarrays(arr) {
    for (var sp = 0; sp < arr.length; sp++) {
        for (var ep = sp; ep < arr.length; ep++) {
            subarrayPrinter(arr, sp, ep);
        }
    }
}
var arr = [10, 20, 30, 40, 50];
printAllSubarrays(arr);
