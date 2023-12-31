
function bstConst(l:number, r: number,nums: number[]): TreeNode | null{
    if(l > r) return null;

    let mid = Math.floor((l+r)/2);
    let currNode = new TreeNode(nums[mid]);

    currNode.left = bstConst(l,mid-1,nums);
    currNode.right  = bstConst(mid+1,r,nums)

    return currNode;
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    let root = bstConst(0,nums.length-1,nums);
    return root;
};