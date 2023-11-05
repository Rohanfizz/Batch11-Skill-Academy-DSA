function pattern3(n: number) {
    for (let i = n; i >= 1; i--) {
        let s: string = "";

        let countStars = i;
        let countSpaces = n - i;
        
        //I have to add countSpaces
        while(countSpaces > 0){
            s+=" ";
            countSpaces--;
        }
        //I have to add Stars
        while(countStars > 0){
            s+="*";
            countStars--;
        }

        console.log(s);
    }
}

pattern3(5);
