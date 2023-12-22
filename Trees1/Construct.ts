class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(v:number){
        this.val = v;
        this.left = null;
        this.right = null;
    }
}

let arr = [5,10,4,-1,13,-1,-1,11,-1,-1,12,6,-1,-1,-1];
let idx = 0;

function constructTree(arr:number[]) : TreeNode | null{
    if(arr[idx] == -1){
        idx++;
        return null;
    }

    let newNode = new TreeNode(arr[idx]);
    idx++;

    newNode.left = constructTree(arr);
    newNode.right = constructTree(arr);

    return newNode;
}

let root = constructTree(arr);
console.log(root);