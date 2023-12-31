
function searchBST(root: TreeNode | null, target: number): TreeNode | null {
    if(root == null) return null;

    if(root.val == target) return root;
    
    if(target < root.val) return searchBST(root.left,target);
    else return searchBST(root.right,target);


    // let curr = root;
    // while(curr != null && curr.val != target){
    //     if(target < curr.val) curr = curr.left;
    //     else if(target > curr.val) curr = curr.right;
    // }
    // return curr;
};