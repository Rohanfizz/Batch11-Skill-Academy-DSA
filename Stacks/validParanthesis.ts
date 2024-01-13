function areSameType(opening:string,closing:string) :boolean{
    if(opening =='(' && closing==')') return true;
    else if(opening =='[' && closing==']') return true;
    else if(opening =='{' && closing=='}') return true;
    return false;
}

function isOpening(bracket:string): boolean{
    if(bracket == '(' || bracket=='[' || bracket=='{') return true;
    else return false;
}

function isValid(s: string): boolean {
    let st: string[] = [];
    for(let i = 0;i<s.length;i++){
        let curr = s[i];
        if(isOpening(curr)){
            st.push(curr);
        }else{
            if(st.length==0) return false;  // extra closing
            let top = st[st.length-1];
            if(areSameType(top,curr)) st.pop();
            else return false;                  // type mismatch
        }
    }
    if(st.length > 0) return false;// extra opening
    return true;
};