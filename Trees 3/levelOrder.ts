
function levelOrder(root: TreeNode | null): number[][] {
    let q : (TreeNode | null)[] = [];
    let arr = [];
    if(root == null) return arr;
    q.push(root);

    while(q.length > 0){
        let levelSize = q.length;
        let currLevel : any= [];

        while(levelSize > 0){
            //Remove
            let currNode = q.shift();
            //Work
            currLevel.push(currNode?.val);
            //Add children
            if(currNode?.left != null) q.push(currNode.left);
            if(currNode?.right!= null) q.push(currNode.right);
            levelSize--;
        }
        
        arr.push(currLevel);
    }
    return arr;
};