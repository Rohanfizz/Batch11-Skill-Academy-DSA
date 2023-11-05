function pattern1(n) {
    for (var i = 1; i <= n; i++) {
        var s = "";
        for (var j = 1; j <= i; j++)
            s += "*";
        console.log(s);
    }
}
pattern1(25);
