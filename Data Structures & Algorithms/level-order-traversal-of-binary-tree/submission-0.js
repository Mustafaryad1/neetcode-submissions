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
     * @return {number[][]}
     */
    levelOrder(root) {
        let res = [];
        if (root == null) return res;
        let queue = [root];
        while (queue.length) {
            let level = [];
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                let item = queue.shift();
                level.push(item.val);
                if (item.left) queue.push(item.left);
                if (item.right) queue.push(item.right);
            }
            res.push(level)
        }
        return res;
    }
}
