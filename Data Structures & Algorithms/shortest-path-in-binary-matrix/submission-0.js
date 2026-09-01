class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        if (grid[0][0] == 1 || grid[ROWS - 1][COLS - 1] == 1) return -1;
        if (ROWS == 1 && COLS == 1) return 1;
        let queue = new Array();
        let res = 1;
        const directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
            [1, 1],
            [-1, -1],
            [-1, 1],
            [1, -1],
        ];

        queue.push([0, 0]);
        grid[0][0] = 1;

        while (queue.length) {
            res++;
            const queueLength = queue.length;
            for (let i = 0; i < queueLength; i++) {
                const item = queue.shift();
                const r = item[0],
                    c = item[1];
                for (let j = 0; j < 8; j++) {
                    const d = directions[j];
                    const m = d[0],
                        n = d[1];
                    const newR = r + m;
                    const newC = c + n;
                    if (newR == ROWS - 1 && newC == COLS - 1) return res;
                    if (newR < 0 || newR >= ROWS || newC < 0 || newC >= COLS || grid[newR][newC] == 1)
                        continue;
                    grid[newR][newC] = 1;
                    queue.push([newR, newC]);
                }
            }
        }
        return -1;
    }
}