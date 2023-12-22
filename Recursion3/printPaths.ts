function printPaths(i:number,j:number,n:number,m:number,psf:string){
    if(i > n || j > m) return;
    if( i == n && j == m){
        console.log(psf);
        return;
    }

    //If i try to go horizontally
    let hori = psf +"H"
    let verti =psf+"V";
    printPaths(i,j+1,n,m,hori);
    //If i try to go vertically
    printPaths(i+1,j,n,m,verti);
}

printPaths(1,1,3,4,"")