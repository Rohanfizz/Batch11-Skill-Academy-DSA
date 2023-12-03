function stringCompression(s) {
    var res = "";
    var i = 0;
    var j = 0;
    while (i < s.length) {
        var count = 0;
        while (j < s.length && s[i] == s[j]) {
            count++;
            j++;
        }
        res += s[i];
        if (count > 1)
            res += count;
        i = j;
    }
    return res;
}
console.log(stringCompression("aabbbbcdddefggaa"));
