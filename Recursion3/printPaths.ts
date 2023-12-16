function printPaths(i:number,j:number,n:number,m:number,psf:string){
    if(i > n || j > m) return;
    if( i == n && j == m){
        console.log(psf);
        return;
    }

    //If i try to go horizontally
    printPaths(i,j+1,n,m,psf+"H");
    //If i try to go vertically
    printPaths(i+1,j,n,m,psf+"V");
}

printPaths(1,1,3,4,"")