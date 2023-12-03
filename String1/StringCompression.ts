function stringCompression(s: string): string {
    let res = "";

    let i = 0;
    let j = 0;

    while (i < s.length) {
        let count = 0;

        while (j < s.length && s[i] == s[j]) {
            count++;
            j++;
        }

        res += s[i];
        if (count > 1) res += count;

        i = j;
    }
    return res;
}

console.log(stringCompression("aabbbbcdddefggaa"));

