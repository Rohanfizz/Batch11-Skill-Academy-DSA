function longestCommonPrefix(arr: string[]): string {
    let ans  = "";
    for(let  i= 0;i<arr[0].length;i++){// i = characters
        for(let j = 0;j<arr.length;j++){// j = strings
            // index i is out of bounds of jth string OR mismatch
            if( i==arr[j].length  || arr[0][i] != arr[j][i]) return ans;
        }
        ans+=arr[0][i];
    }
    return ans;
};