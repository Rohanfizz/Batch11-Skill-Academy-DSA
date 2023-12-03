function stringWithDiffOfConsecutiveChars(s) {
    var res = "";
    res += s[0];
    for (var i = 1; i < s.length; i++) {
        var diff = s.charCodeAt(i) - s.charCodeAt(i - 1);
        res += diff;
        res += s[i];
    }
    return res;
}
console.log(stringWithDiffOfConsecutiveChars("abcCBbe"));
