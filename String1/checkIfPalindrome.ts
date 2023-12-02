function checkPalindrome(s:string) : boolean {
    let l = 0;
    let r  = s.length-1;

    while(l<r){
        if(s[l] == s[r]){
            l++;
            r--;
        }else{
            return false;
        }
    }
    return true;
}


function printPalindromicSubstrings(s:string){
    for (let sp = 0; sp < s.length; sp++) {
        for (let ep = sp; ep < s.length; ep++) {
            if(checkPalindrome(s.substring(sp,ep+1)) == true){
                console.log( s.substring(sp,ep+1) );
            }
        }
    }
}
printPalindromicSubstrings("naman");