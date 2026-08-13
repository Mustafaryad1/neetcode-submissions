class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const flatMatrix = matrix.flat();
        let l = 0;
        let r = flatMatrix.length - 1;
        while (l <= r) {
            let mid = Math.floor((r + l) / 2);
            if (flatMatrix[mid] == target) return true;
            else if (flatMatrix[mid] > target) r = mid - 1;
            else l = mid + 1;
        }
        return false;
    }
}
