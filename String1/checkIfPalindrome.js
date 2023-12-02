function checkPalindrome(s) {
    var l = 0;
    var r = s.length - 1;
    while (l < r) {
        if (s[l] == s[r]) {
            l++;
            r--;
        }
        else {
            return false;
        }
    }
    return true;
}
function printPalindromicSubstrings(s) {
    for (var sp = 0; sp < s.length; sp++) {
        for (var ep = sp; ep < s.length; ep++) {
            if (checkPalindrome(s.substring(sp, ep + 1)) == true) {
                console.log(s.substring(sp, ep + 1));
            }
        }
    }
}
printPalindromicSubstrings("naman");
