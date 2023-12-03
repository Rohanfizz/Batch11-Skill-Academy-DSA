function stringWithDiffOfConsecutiveChars(s: string): string {
    let res = "";

    res += s[0];

    for (let i = 1; i < s.length; i++) {
        let diff = s.charCodeAt(i) - s.charCodeAt(i - 1);

        res += diff;
        res += s[i];
    }

    return res;
}

let ans = stringWithDiffOfConsecutiveChars("abcCBbe")
console.log(ans);
