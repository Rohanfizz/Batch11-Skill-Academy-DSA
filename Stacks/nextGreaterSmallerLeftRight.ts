function ngel(arr: number[]): number[] {

    let ans = new Array(arr.length);
    let st :number[] = [];

    for(let i = 0 ;i<arr.length;i++){
        // While there are elements in stack, remove all the smaller ones from the top, 
        // because i want greater element.
        while(st.length > 0 && st[st.length-1] <= arr[i]){
            st.pop();
        }

        //Above loop will stop because 2 reasons
        //1. Stack becomes empty
        if(st.length == 0){
            ans[i] = -1;
        }else{  // 2. I found greater element on top of the stack
            ans[i] = st[st.length-1];
        }

        //I will add myself as a potential future answer for somebody
        st.push(arr[i]);
    }
    return ans;
}

function nsel(arr: number[]): number[] {

    let ans = new Array(arr.length);
    let st :number[] = [];

    for(let i = 0 ;i<arr.length;i++){
        // While there are elements in stack, remove all the greater ones from the top, 
        // because i want smaller element.
        while(st.length > 0 && st[st.length-1] >= arr[i]){
            st.pop();
        }

        //Above loop will stop because 2 reasons
        //1. Stack becomes empty
        if(st.length == 0){
            ans[i] = -1;
        }else{  // 2. I found greater element on top of the stack
            ans[i] = st[st.length-1];
        }

        //I will add myself as a potential future answer for somebody
        st.push(arr[i]);
    }
    return ans;
}

function nger(arr: number[]): number[] {

    let ans = new Array(arr.length);
    let st :number[] = [];

    for(let i = arr.length-1;i>=0;i--){ // reversed loop
        // While there are elements in stack, remove all the smaller ones from the top, 
        // because i want greater element.
        while(st.length > 0 && st[st.length-1] <= arr[i]){
            st.pop();
        }

        //Above loop will stop because 2 reasons
        //1. Stack becomes empty
        if(st.length == 0){
            ans[i] = -1;
        }else{  // 2. I found greater element on top of the stack
            ans[i] = st[st.length-1];
        }

        //I will add myself as a potential future answer for somebody
        st.push(arr[i]);
    }
    return ans;
}

function nser(arr: number[]): number[] {

    let ans = new Array(arr.length);
    let st :number[] = [];

    for(let i = arr.length-1;i>=0;i--){ // reversed loop
        // While there are elements in stack, remove all the smaller ones from the top, 
        // because i want greater element.
        while(st.length > 0 && st[st.length-1] >= arr[i]){
            st.pop();
        }

        //Above loop will stop because 2 reasons
        //1. Stack becomes empty
        if(st.length == 0){
            ans[i] = -1;
        }else{  // 2. I found greater element on top of the stack
            ans[i] = st[st.length-1];
        }

        //I will add myself as a potential future answer for somebody
        st.push(arr[i]);
    }
    return ans;
}

console.log(nser([7,2,8,3,6,4,5,7,2,3,10]));
