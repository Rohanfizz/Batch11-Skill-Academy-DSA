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

function nodeToRootPath(target:number,node: TreeNode | null) : number[]{
    if(node == null) return []; //I was not able to find
    if(node.val == target) return [node.val];
    //node is not null and its not equal to target as well

    let leftArray = nodeToRootPath(target,node.left);
    if(leftArray.length > 0){   //i found the target in my left subtree
        leftArray.push(node.val);
        return leftArray;
    }

    let rightArray = nodeToRootPath(target,node.right);
    if(rightArray.length > 0){
        rightArray.push(node.val);
        return rightArray;
    }

    return [];
}

let ntrp = nodeToRootPath(13,root);
console.log(ntrp);
