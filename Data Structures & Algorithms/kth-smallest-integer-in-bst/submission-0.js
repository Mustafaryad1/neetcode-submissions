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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let res = [];
        const inorder = (root, res) => {
            if (root == null) return [];
            inorder(root.left, res);
            res.push(root.val);
            inorder(root.right, res);
        };
        inorder(root, res);
        return res[k - 1];
    }
}
