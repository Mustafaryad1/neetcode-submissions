class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    // abc, bac,bca, cab, bac,cba
    checkInclusion(s1, s2) {
        let l = 0,
            r = s2.length - 1;
        const window = s1.length;
        while (l <= r) {
            const winS1 = s1.split('').sort().join('');
            const winS2 = s2.slice(l, l + window).split('').sort().join('');
            if (winS1 == winS2) {
                return true;
            }
            l++;
        }
        return false
    }
}
