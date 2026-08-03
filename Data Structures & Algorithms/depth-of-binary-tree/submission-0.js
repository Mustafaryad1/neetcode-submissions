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

        let queue = [root];
        let depth = 0
        while (queue.length) {
            depth += 1;
            let i = queue.length;

            while (i > 0) {
               
                --i;
                let item = queue.shift()
                if (item.left) queue.push(item.left)
                if (item.right) queue.push(item.right)
            }
        }
        return depth;
    }
}
