function climbStairs(n:number,i:number,psf:string) : void {
    if(i > n) return;
    if(i == n){
        console.log(psf);
        return;
    }
    //We are on stair which is less than n
    //We want to reach nth stair
    //We will try to make a jump 1
    climbStairs(n,i+1,psf+"1, ");
    //We will try to make a jump 2
    climbStairs(n,i+2,psf+"2, ");
    //We will try to make a jump 3
    climbStairs(n,i+3,psf+"3, ");
}

function countWaysToClimbStairs(n:number,i:number) : number{
    if(i > n) return 0;
    if(i == n) return 1;

    let one = countWaysToClimbStairs(n,i+1);
    let two = countWaysToClimbStairs(n,i+2);
    let three = countWaysToClimbStairs(n,i+3);

    return one + two + three;
}
console.log(countWaysToClimbStairs(4,0));

// climbStairs(4,0,""); 