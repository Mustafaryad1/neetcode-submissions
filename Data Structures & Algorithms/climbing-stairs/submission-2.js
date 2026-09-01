class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2) {
            return n;
        }
        let db = new Array(n + 1).fill(0);
        db[1] = 1;
        db[2] = 2;
        for(let i=3; i<=n;i++){
            db[i] = db[i-2] + db[i-1];
        }
        return db[n];
    }
}
