function zigZag(arr: number[][]) {
    let rows = arr.length;
    let cols = arr[0].length;

    for (let i = 0; i < rows; i++) {
        if (i % 2 == 0) {
            // Row number is even
            //left to right
            for (let j = 0; j < cols; j++) {
                console.log(arr[i][j]);
            }
        } else {
            //right to left
            for (let j = cols - 1; j >= 0; j--) {
                console.log(arr[i][j]);
            }
        }
    }
}

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10,11,12]
];

zigZag(arr);