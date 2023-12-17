function mergeTwoSortedArrays(ar1: number[], ar2: number[]): number[] {
    let ans: number[] = [];

    let i = 0;
    let j = 0;

    while (i < ar1.length && j < ar2.length) {
        if (ar1[i] < ar2[j]) {
            ans.push(ar1[i]);
            i++;
        } else {
            ans.push(ar2[j]);
            j++;
        }
    }
    
    //if j goes out of bounds
    while (i < ar1.length) ans.push(ar1[i++]);

    //if i goes out of bounds
    while (j < ar2.length) ans.push(ar2[j++]);

    return ans;
}

let ar1 = [10,20,30,40,50,60]
let ar2 = [15,25,35,45,55]

console.log(mergeTwoSortedArrays(ar1,ar2));
