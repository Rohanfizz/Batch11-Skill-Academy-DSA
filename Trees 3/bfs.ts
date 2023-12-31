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

function bstConst(l: number, r: number, nums: number[]): TreeNode | null {
    if (l > r) return null;

    let mid = Math.floor((l + r) / 2);
    let currNode = new TreeNode(nums[mid]);

    currNode.left = bstConst(l, mid - 1, nums);
    currNode.right = bstConst(mid + 1, r, nums);

    return currNode;
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    let root = bstConst(0, nums.length - 1, nums);
    return root;
}

let arr: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90,100];
let root: TreeNode | null = sortedArrayToBST(arr);
//////////////////////
//Level order traver or bfs

function bfs(root: TreeNode|null){
    let q : (TreeNode | null)[] = [];
    
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
        
        console.log(currLevel);
    }
}

bfs(root)


