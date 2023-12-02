function spiralOrder(arr: number[][]): number[] {
    let  ans : number[] = [];

    let rows = arr.length;
    let cols = arr[0].length;

    let tw = 0;
    let bw = arr.length-1;
    let lw = 0;
    let rw = arr[0].length-1;

    let total = rows * cols;

    while(total > 0){ //ignore

        // tw,lw->rw
        for(let j = lw ; j <= rw && total > 0 ; j++){
            ans.push( arr[tw][j] );
            total--;
        }
        tw++

        // tw->bw, rw
        for(let i = tw; i <= bw && total > 0 ; i++ ){
            ans.push( arr[i][rw] )
            total--;
        }
        rw--;

        // bw, rw->lw
        for(let j = rw; j >= lw && total > 0 ; j-- ){
            ans.push( arr[bw][j] );
            total--;
        }
        bw--;

        // bw->tw, lw
        for(let i = bw; i >= tw && total > 0 ; i-- ){
            ans.push( arr[i][lw] );
            total--;
        }
        lw++;
    }

    return ans;
};