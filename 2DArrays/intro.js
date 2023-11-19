var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
function itr1(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}
function itr2(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = arr[i].length - 1; j >= 0; j--) {
            console.log(arr[i][j]);
        }
    }
}
function itr3(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        for (var j = arr[i].length - 1; j >= 0; j--) {
            console.log(arr[i][j]);
        }
    }
}
function itr4(arr) {
    for (var j = arr[0].length - 1; j >= 0; j--) {
        for (var i = arr.length - 1; i >= 0; i--) {
            console.log(arr[i][j]);
        }
    }
}
itr4(arr);
