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
        combinator.push(i);
        this.helper(i + 1, combinator, res, n, k);
        combinator.pop();
        this.helper(i + 1, combinator, res, n, k);
    }
}
