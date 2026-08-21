class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const mySet = new Set();
        let l = 0;
        let res = 0;
        for (let r = 0; r < s.length; r++) {
            while (mySet.has(s[r])) {
                mySet.delete(s[l]);
                l++;
            }
            mySet.add(s[r]);
            res = Math.max(res, r - l+1);
        }
        return res;
    }
}
