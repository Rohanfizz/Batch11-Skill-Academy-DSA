function toggleCase(s:string){
    let ans = "";

    for(let i = 0;i<s.length;i++){
        //I want the ascii value of the character at ith position
        let ascii = s.charCodeAt(i);

        if(ascii >= 97){//small
            ascii-=32;
        }else ascii+=32

        //ascii -> character
        ans += String.fromCharCode(ascii)
    }
    return ans;
}

console.log(toggleCase("aBCdEF"));
