class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const rows = m;
        const columns = n;
        const memo = new Map();
        const db = (m, n) => {
            if (m >= rows || n >= columns) return 0;
            if (m == rows - 1 && n == columns - 1) return 1;
            const key = `${m},${n}`;
            if (memo.has(key)) return memo.get(key);
            const res = db(m + 1, n) + db(m, n + 1);
            memo.set(key, res);
            return res;
        };
        return db(0, 0);
    }
}
