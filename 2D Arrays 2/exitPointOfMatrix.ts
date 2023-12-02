function exitPoint(arr : number[][]){
    let i = 0;
    let j = 0;
    let dir = "R";

    while(i>=0 && i<arr.length && j>=0 && j<arr[0].length){
        if(arr[i][j] == 1){
            //Change direction
            if(dir == "R")  dir = "D"
            else if(dir == "D") dir = "L"
            else if(dir == "L") dir = "U"
            else if(dir == "U") dir = "R"

            arr[i][j] = 0;
        }
        // Move forward in the current direction
        if(dir  == "R") j++;
        else if(dir == "D") i++;
        else if(dir == "L")  j--;
        else if(dir=="U") i--;
    }

    //We are outside right now
    //We have to take a step back into opposite direction to go back inside array
    if(dir == "R") j--;
    else if(dir == "D") i--;
    else if(dir == "L") j++;
    else if(dir == "U") i++;

    console.log(i,j);
    
}


let arr = [
    [0,0,0,0,1,0],
    [0,1,0,0,0,1],
    [0,0,0,0,0,0],
    [0,1,0,0,1,1],
    [0,0,0,0,0,0],
]

exitPoint(arr);