/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if (!root) return 0;

        let stack = [[root, 1]]
        let res = 0;
        while (stack.length) {
            let [item, depth] = stack.pop();
            res = Math.max(depth, res);
            if (item.left) stack.push([item.left, depth + 1])
            if (item.right) stack.push([item.right, depth + 1])
        }
        return res;
    }
}
