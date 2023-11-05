function pattern4(n) {
    var cntStars = 1;
    var cntSpaces = Math.floor(n / 2); //2.5 -> 2
    for (var i = 1; i <= n; i++) {
        var s = "";
        //Print spaces
        for (var j = 1; j <= cntSpaces; j++)
            s += " ";
        //Print stars 
        for (var j = 1; j <= cntStars; j++)
            s += "*";
        console.log(s);
        if (i < n / 2) {
            cntSpaces -= 1;
            cntStars += 2;
        }
        else {
            cntSpaces += 1;
            cntStars -= 2;
        }
    }
}
pattern4(7);
