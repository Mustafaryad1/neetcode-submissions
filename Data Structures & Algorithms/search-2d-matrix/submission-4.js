class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let l = 0;
        let r = ROWS * COLS - 1;
        while (l <= r) {
            let m =l + Math.floor((r - l) / 2);
            let row = Math.floor(m / COLS);
            let col = m % COLS;
            const midValue = matrix[row][col];
            if (midValue == target) return true;
            else if (midValue > target) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return false;
    }
}
