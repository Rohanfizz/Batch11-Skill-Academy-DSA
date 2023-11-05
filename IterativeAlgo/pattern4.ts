function pattern4(n:number){
    let cntStars = 1;
    let cntSpaces = Math.floor(n/2); //2.5 -> 2

    for(let i = 1;i<=n;i++){
        let s = "";
        //Print spaces
        for(let j = 1;j<=cntSpaces;j++) s+=" ";
        //Print stars 
        for(let j = 1;j<=cntStars;j++) s+="*";
        
        console.log(s);

        if(i < n/2){
            cntSpaces-=1;
            cntStars+=2;
        }else{
            cntSpaces+=1;
            cntStars-=2;
        }
    }
}
pattern4(7);