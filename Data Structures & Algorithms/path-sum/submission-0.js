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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum, sum = 0) {
        if (root == null) {
            return false;
        }

        sum += root.val;
        if (root.left == null && root.right == null) {
            return sum === targetSum;
        }

        if (this.hasPathSum(root.left, targetSum, sum)) {
            return true;
        } 
        if (this.hasPathSum(root.right, targetSum, sum)) {
            return true;
        }

        return false;
    }
}
