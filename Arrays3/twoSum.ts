function twoSumSortedArray(arr: number[], target: number): number[] {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let currSum = arr[i] + arr[j];

        if (currSum == target) {
            return [arr[i], arr[j]];
        } else if (currSum < target) i++;
        else if (currSum > target) j--;
    }
    return [];
}
function twoSum(arr: number[], target: number): number[] {
    let obj = {}; // value => index

    for(let i = 0;i<arr.length;i++){
        let me = arr[i];
        let myPartner = target - me;
        if(obj[myPartner] !== undefined){
            return [ obj[myPartner] , i ];
        }
        obj[me] = i;
    }
};