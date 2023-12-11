function toh(n :number, s:string,d:string,h:string){
    if(n == 0) return;
    toh(n-1,s,h,d)
    console.log("Move disc "+n+" from "+s+" to "+d);
    toh(n-1,h,d,s)
}

toh(4,"A","B","C")