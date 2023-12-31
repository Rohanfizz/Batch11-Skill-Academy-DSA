class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(v: number) {
        this.val = v;
        this.left = null;
        this.right = null;
    }
}

let arr = [5, 10, 4, -1, 13, -1, -1, 11, -1, -1, 12, 6, -1, -1, -1];
let idx = 0;

function constructTree(arr: number[]): TreeNode | null {
    if (arr[idx] == -1) {
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

///////////////////////// Code below this

function treePrinter(node: TreeNode | null): void {
    if(node == null) return;
    
    // Data print
    let s = node.val +": "
    
    if(node.left == null) s+="null, ";
    else s+= node.left.val+", ";

    if(node.right == null) s+="null"
    else s+= node.right.val;

    console.log(s);
    //

    treePrinter(node.left);
    treePrinter(node.right);
}

treePrinter(root)




