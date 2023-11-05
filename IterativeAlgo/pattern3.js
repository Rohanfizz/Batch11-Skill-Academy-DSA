function pattern3(n) {
    for (var i = n; i >= 1; i--) {
        var s = "";
        var countStars = i;
        var countSpaces = n - i;
        //I have to add countSpaces
        while (countSpaces > 0) {
            s += " ";
            countSpaces--;
        }
        //I have to add Stars
        while (countStars > 0) {
            s += "*";
            countStars--;
        }
        console.log(s);
    }
}
pattern3(5);
