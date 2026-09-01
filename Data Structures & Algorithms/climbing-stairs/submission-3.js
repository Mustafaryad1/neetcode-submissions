class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2) {
            return n;
        }
        let db = new Array(2).fill(0);
        db[0] = 1;
        db[1] = 2;
        for (let i = 3; i <= n; i++) {
            let temp = db[1]
            db[1] = db[0] + db[1];
            db[0] = temp;
        }
        return db[1];
    }
}
