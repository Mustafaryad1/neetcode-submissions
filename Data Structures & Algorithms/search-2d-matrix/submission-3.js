class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (!matrix || matrix.length === 0) return false;
        let rows = matrix.length;
        let cols = matrix[0].length;
        let l = 0;
        let r = cols - 1;
        while (l < rows && r >= 0) {
            if (target == matrix[l][r]) return true;
            if (target > matrix[l][r]) {
                l++;
            } else {
                r--;
            }    
        }
        return false;
    }
}
