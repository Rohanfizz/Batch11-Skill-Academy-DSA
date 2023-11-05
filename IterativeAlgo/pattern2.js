function pattern2(n) {
    for (var i = n; i >= 1; i--) {
        var s = "";
        for (var j = 1; j <= i; j++)
            s += "*";
        console.log(s);
    }
}
pattern2(25);
