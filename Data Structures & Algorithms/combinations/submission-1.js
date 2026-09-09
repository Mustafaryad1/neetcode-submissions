class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let combinator = [],
            res = [];
        this.helper(1, combinator, res, n, k);
        return res;
    }

    helper(i, combinator, res, n, k) {
        if (combinator.length == k) {
            res.push([...combinator]);
            return;
        }
        if (i > n) return;
        for(let j=i; j< n+1;j++){
            combinator.push(j);
            this.helper(j+1,combinator, res, n, k);
            combinator.pop();
        }
    }
}
