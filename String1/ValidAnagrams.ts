function isAnagram(s: string, t: string): boolean {
    if(s.length != t.length) return false;

    let freqS = new Array(26).fill(0);//It will store the freq of all the chars in string s
    let freqT = new Array(26).fill(0);//It will store the freq of all the chars in string t

    for(let i = 0; i<s.length ;i++){//Iterating on string s
        //S[i] == "b"
        let index = s.charCodeAt(i) - 97; // 98 -97 = 1
        freqS[index]++;// freq of "b" will be stored at index 1
    }

    for(let i =0;i<t.length;i++){
        let index = t.charCodeAt(i)- 97;
        freqT[index]++;
    }

    for(let i = 0;i<26;i++){
        if(freqS[i] != freqT[i]) return false;
    }

    return true;
};