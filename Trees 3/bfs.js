var TreeNode = /** @class */ (function () {
    function TreeNode(v) {
        this.val = v;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
function bstConst(l, r, nums) {
    if (l > r)
        return null;
    var mid = Math.floor((l + r) / 2);
    var currNode = new TreeNode(nums[mid]);
    currNode.left = bstConst(l, mid - 1, nums);
    currNode.right = bstConst(mid + 1, r, nums);
    return currNode;
}
function sortedArrayToBST(nums) {
    var root = bstConst(0, nums.length - 1, nums);
    return root;
}
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var root = sortedArrayToBST(arr);
//////////////////////
//Level order traver or bfs
function bfs(root) {
    var q = [];
    q.push(root);
    while (q.length > 0) {
        var levelSize = q.length;
        var currLevel = [];
        while (levelSize > 0) {
            //Remove
            var currNode = q.shift();
            //Work
            currLevel.push(currNode === null || currNode === void 0 ? void 0 : currNode.val);
            //Add children
            if ((currNode === null || currNode === void 0 ? void 0 : currNode.left) != null)
                q.push(currNode.left);
            if ((currNode === null || currNode === void 0 ? void 0 : currNode.right) != null)
                q.push(currNode.right);
            levelSize--;
        }
        console.log(currLevel);
    }
}
bfs(root);
