class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let res = 0;
        if (n < 1) {
            return res;
        }
        const db = (n,cache) => {
            if (n == 0) {
                return 1;
            }if(n < 0){
                return 0;
            }
            if (n in cache) return cache[n];
            cache[n] = db(n - 1, cache) + db(n - 2, cache);
            return cache[n];
        };
        return db(n,{});
    }
}
