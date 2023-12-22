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

let preorder :number[]= [];
let inorder :number[]= [];
let postorder :number[]= [];

function dfs(node: TreeNode | null){
    if(node == null) return;    

    preorder.push(node.val);

    dfs(node.left);

    inorder.push(node.val);

    dfs(node.right);

    postorder.push(node.val);
}
dfs(root);

console.log("preOrder:"+preorder);
console.log("inOrder:"+inorder);
console.log("postOrder:"+postorder);
